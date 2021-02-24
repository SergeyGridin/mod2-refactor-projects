class Board {
  constructor() {
    this.grid = Array(9).fill('');
    this.layout = '';
    this.winner = '';
  }

  updateLayout() {
    // update layout to display
    this.layout = '\n';
    for (let i = 0; i < 9; i++) {
      // After the last columns of each row we need to add horizontal lines
      if (i === 2 || i === 5 || i === 8) {
        this.layout += `${this.displaySymbol(this.grid[i])}\n`;

        // To make sure we don't add a horizontal line after last row
        i !== 8 ? (this.layout += `---------\n`) : '';

        // continue will stop the current iteration, but keep looping
        continue;
      }
      this.layout += `${this.displaySymbol(this.grid[i])} | `;
    }
  }

  display() {
    // Update board and render to user
    this.updateLayout();
    console.log(this.layout);
  }

  // Return either an empty space or the player's symbol
  displaySymbol(symbol) {
    return symbol === '' ? ' ' : symbol;
  }

  // Determine if move is valid
  isValidMove(pos) {
    // Make sure they chose a spot on the board
    if (pos < 0 || pos > 8) return false;

    // Make sure the position is not already taken
    if (this.grid[pos] !== '') return false;

    // If they chose a position on board that is empty, the move is valid
    return true;
  }

  // Add token to our board
  addToken(pos, token) {
    if (typeof pos !== 'number') throw new TypeError('pos must be a number!');

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
