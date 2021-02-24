
class Gem {
  constructor(row, column, gem, board) {
    this.row = row;
    this.column = column;
    this.gem = gem;
    this.board = board;
    this.adjacentCoords = this.setAdjacentCoords()
  }
  
  setAdjacentCoords() {
    const adjacentCoords = []
    const rowChars = this.board.rowChars
    
    if (this.row > 0) {
      adjacentCoords.push([rowChars[this.row-1], this.column])
    }
    if (this.row < rowChars.length-2) {
      adjacentCoords.push([rowChars[this.row+1], this.column])
    }
    if (this.column > 0) {
      adjacentCoords.push([this.row, this.column-1])
    }
    if (this.column < this.board.columns.length-2) {
      adjacentCoords.push([this.row, this.column+1])
    }
    return adjacentCoords;
  }
  
  dropToRow(row) {
    this.row = row;
  }
  
  swapWithGem(gem) {
    [this.row, gem.row] = [gem.row, this.row]
    [this.column, gem.column] = [gem.column, this.column]
    [this.adjacentCoords, gem.adjacentCoords] = [gem.adjacentCoords, this.adjacentCoords]
  }
  
  checkMatch(arr, i) {
    const matches = []
    let count = 1;
    while (this.gem === arr[i + count]) {
      matches.push(i + count);
      count++;
    }
    if (matches.length >= 3) return matches;
    else return false;
  }

}

module.exports = Gem;