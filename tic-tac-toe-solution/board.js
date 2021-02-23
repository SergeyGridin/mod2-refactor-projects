class Board {
  constructor() {
    this.grid = Array(9).fill('');
    this.layout = '';
    this.winner = '';
  }

  updateLayout(row) {
    // update layout to display
    // consider refactoring
    if (row === 1) {
      this.layout = `${this.displaySymbol(this.grid[0])} | `;
      this.layout += `${this.displaySymbol(this.grid[1])} | `;
      this.layout += `${this.displaySymbol(this.grid[2])}\n`;
      this.layout += `---------\n`;
    } else if (row === 2) {
      this.layout += `${this.displaySymbol(this.grid[3])} | `;
      this.layout += `${this.displaySymbol(this.grid[4])} | `;
      this.layout += `${this.displaySymbol(this.grid[5])}\n`;
      this.layout += `---------\n`;
    } else if (row === 3) {
      this.layout += `${this.displaySymbol(this.grid[6])} | `;
      this.layout += `${this.displaySymbol(this.grid[7])} | `;
      this.layout += `${this.displaySymbol(this.grid[8])}\n`;
    }
  }

  display() {
    // Update board and render to user
    for (let row = 1; row <= 3; row++) {
      this.updateLayout(row);
    }
    console.log(this.layout);
  }

  // Return either an empty space or the player's symbol
  displaySymbol(symbol) {
    return symbol === '' ? ' ' : symbol;
  }

  // Determine if move is valid
  isValidMove(pos) {
    // Make sure they chose a spot on the board
    // Possibly throw an error here
    if (pos < 0 || pos > 8) return false;

    // Make sure the position is not already taken
    if (this.grid[pos] !== '') return false;

    // If they chose a position on board that is empty, the move is valid
    return true;
  }

  // Add token to our board
  addToken(pos, token) {
    this.grid[pos] = token;
  }

  checkForWin() {
    this.checkRows();
    this.checkColumns();
    this.checkDiagonals();
    if (!this.winner) {
      return false;
    }
    return true;
  }

  checkRows() {
    for (let i = 0; i < 9; i += 3) {
      if (
        this.grid[i] !== '' &&
        this.grid[i] === this.grid[i + 1] &&
        this.grid[i] === this.grid[i + 2]
      ) {
        this.winner = this.grid[i].toUpperCase();
        break;
      }
    }
  }

  checkColumns() {
    for (let i = 0; i < 3; i += 1) {
      if (
        this.grid[i] !== '' &&
        this.grid[i] === this.grid[i + 3] &&
        this.grid[i] === this.grid[i + 6]
      ) {
        this.winner = this.grid[i].toUpperCase();
        break;
      }
    }
  }

  checkDiagonals() {
    if (
      this.grid[0] !== '' &&
      this.grid[0] === this.grid[4] &&
      this.grid[0] === this.grid[8]
    ) {
      this.winner = this.grid[0].toUpperCase();
    }

    if (
      this.grid[2] !== '' &&
      this.grid[2] === this.grid[4] &&
      this.grid[2] === this.grid[6]
    ) {
      this.winner = this.grid[2].toUpperCase();
    }
  }
}

module.exports = Board;
