// "🍊", "🍌", "🍎", "🍑", "🍒"

class Board {
  constructor(rowCount = 8, colCount = 8, gems = ["🍇", "🍈", "🥥", "🍌", "🍎"]) {
    this.colChars = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "Z", "W", "X", "Y", "Z"].slice(0, colCount);
    this.rowCount = rowCount
    this.gems = gems;
    this.grid = this.generateGrid()
    while (this.checkGridMatches()) {
      this.grid = this.generateGrid()
    }
  }

  generateGrid() {
    const grid = {}
    for (let ri = 0; ri < this.rowCount; ri++) {
      const gemColumn = []
      this.addGems(gemColumn)
      grid[this.colChars[ri]] = gemColumn
    }
    return grid;
  }

  getRow(ri) {
    return this.colChars.map(char => this.grid[char][ri])
  }

  checkArrayMatch(arr, i) {
    const gem = arr[i];
    let count = 1;
    const matches = [i]
    while (gem === arr[i + count]) {
      matches.push(i + count)
      count++
    }
    if (matches.length >= 3) return matches;
    else return false;
  }

  checkRowColMatches(char, ri) {
    const matches = []
    const ris = this.checkArrayMatch(this.grid[char], ri)
    if (ris) matches.push(...ris.map(i => [i + 1, char]))

    const ci = this.colChars.indexOf(char)
    const cis = this.checkArrayMatch(this.getRow(ri), ci)
    if (cis) matches.push(...cis.map(i => [ri + 1, this.colChars[i]]))

    return matches;
  }

  checkGridMatches() {
    let matches = []

    this.colChars.forEach((char) => {
      for (let ri = 0; ri < this.rowCount; ri++) {
        const currentMatches = this.checkRowColMatches(char, ri)
        if (currentMatches) matches.push(...currentMatches)
      }
    })
    let uniqueMatches = Array.from(new Set(matches.map(match=>match.join(""))))
    uniqueMatches = uniqueMatches.map(match=>match.split(""))
    if (uniqueMatches.length) return uniqueMatches;
    else return false
  }

  removeGems(coords) {
    coords.forEach(coord => {
      const num = coord[0] - 1
      const char = coord[1]
      this.grid[char][num] = null;
    })
  }

  addGems(column) {
    while (column.length < this.rowCount) {
      column.unshift(this.gems[Math.floor(Math.random() * this.gems.length)])
    }
    return column
  }

  updateBoardGems(matches) {
    this.removeGems(matches)
    Object.keys(this.grid).map(char => {
      this.grid[char] = this.grid[char].filter(gem => gem !== null);
      this.addGems(this.grid[char])
    })
    return matches.length
  }
  
  calculateBoard() {
    let score = 0;
    while (this.checkGridMatches()) {
      const matches = this.checkGridMatches();
      score += this.updateBoardGems(matches);
    }
    return score;
  }

  swapGems(coordA, coordB) {
    const newGrid = { ...this.grid }
    const [ra, ca, rb, cb] = [...coordA, ...coordB]
    const gemA = newGrid[ca][ra - 1]
    const gemB = newGrid[cb][rb - 1]
    newGrid[ca][ra - 1] = gemB;
    newGrid[cb][rb - 1] = gemA;
    const matches = this.checkGridMatches()
    if (matches) {
      this.grid = newGrid;
      return matches
    }
    return false;
  }

  verifyAdjacency(coordA, coordB) {
    // calculate the 2-4 adjacent coords for coordA
    // check if coordB is in
    if (coordA.join("") === coordB.join("")) return false;
    const aIndex = this.colChars.indexOf(coordA[1])
    let adjacentChars = coordA[1]
    const adjacentNums = [coordA[0], coordA[0]+1, coordA[0]-1]
    if (aIndex > 0) adjacentChars += this.colChars[aIndex-1]
    if (aIndex < this.colChars.length-1) adjacentChars += this.colChars[aIndex+1]
    
    if (!adjacentChars.includes(coordB[1])) return false;
    if (!adjacentNums.includes(coordB[0])) return false;
    return true;
  }
}

module.exports = Board;


// TODO
// Calculate score and auto-update with auto-combos
// Check if no valid swaps are possible - game over
