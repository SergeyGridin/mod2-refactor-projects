// "🍊", "🍌", "🍎", "🍑", "🍒"

class Board {
  constructor(rowCount = 8, colCount = 8, gems = ["🍇", "🍈", "🍊", "🍌", "🍎", "🍑", "🍒"]) {
    this.rowChars = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "Z", "W", "X", "Y", "Z"].slice(0, rowCount);
    this.colNums = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"].slice(0, colCount);
    this.gems = gems;
    this.columns = this.generateColumns()
  }

  generateColumns() {
    const columns = []
    for (let ci = 0; ci < this.colNums.length; ci++) {
      const gemCol = []
      for (let ri = 0; ri < this.rowChars.length; ri++) {
        gemCol.push(this.gems[Math.floor(Math.random() * this.gems.length)])
      }
      columns.push(gemCol)
    }
    return columns;
  }
  
  getRow(ri) { 
    return this.columns.map(col => col[ri]) 
  }

  checkRowColMatches(gem) {
    const matches = []
    const ris = gem.checkMatch(this.getRow(gem.row), gem.column)
    if (ris) matches.push(...ris.map(ri => [this.rowChars[gem.row], ri+1]))

    const cis = gem.checkMatch(this.columns[gem.column], gem.row)
    if (cis) matches.push(...cis.map(ci => [this.rowChars[ci], gem.column+1]))

    return matches;
  }

  checkGridMatches() {
    let matches = []

    this.rowChars.forEach((rowChar, ri) => {
      this.colNums.forEach((colNum, ci) => {
        const currentMatches = this.checkRowColMatches(ri, ci)
        if (currentMatches) matches.push(...currentMatches)
      })
    })

    console.log("matches", matches)
    if (matches.length) return matches
    else return false
  }
  
  static dropColumnGems(column) {
    // loop column
    // if spot is empty, 
    
    // From bottom, if there is no gem, check next slot until you find a gem
    // move gem to empty slot
    // Continue until end of column.
    // Randomize gems to fill empty spots
    //
    //
    // const column = 
    
  }
  
  getGemAt(rowIndex, colIndex) {
    return this.columns[colIndex][rowIndex]
  }
  
  swapGems(gemA, gemB) {
    this.columns[colIndexA][rowIndexA] = 
    this.columns[colIndexB][rowIndexB] = 
  }
  
  swapGems(coordA, coordB) {
    const newGrid = [...this.columns]
    const gemA = this.getGemAt(coordA[1], coordA[0])
    const gemB = this.getGemAt(coordB[1], coordB[0])
    [this.columns[]]
    gemA.swapWithGem(gemB);
    const matches = this.checkGridMatches()
    if (matches) {
      this.columns = newGrid;
      return matches
    }
    return false;
  }
  
  verifyAdjacency(coordA, coordB) {
    // calculate the 2-4 adjacent coords for coordA
    // check if coordB is in
    
    
    
    // Get -1 and +1
    const charIndex = this.rowChars.indexOf(coordA[0])
  }
  
  

  // Iterate through rows-columns
  // For every iteration, count from current spot forward in row. If 3+, note it
  // Count downward in column. If 3+, note it.
  // Collect all 'matching' coords in an array
  // At the end, return all matching coords. If no matches, return false
  // Stop iterations 2 before the end.
}



module.exports = Board;