const readline = require("readline");
const Board = require("./board");

class Game {
  static LAYOUTS = Object.freeze({
    small: { gridSize: 9, numBombs: 10 },
    medium: { gridSize: 16, numBombs: 40 },
    large: { gridSize: 32, numBombs: 160 },
  });

  constructor(size) {
    if (!(size === "small" || size === "medium" || size === "large")) {
      throw new Error("Invalid size for the board!");
    }

    let { gridSize, numBombs } = Game.LAYOUTS[size];
    this._board = new Board(gridSize, numBombs);
    this._rl = readline.createInterface(process.stdin, process.stdout);
  }

  get board() {
    return this._board;
  }

  get rl() {
    return this._rl;
  }

  play() {
    this.board.render();
    const question = `
    Choose an action and a spot on a board in a form of {Action}, {Row}, {Col}
    Valid actions are f(flag), e(explore), s(save).
    Example of an input: f,0,0 \n\n`;

    this.rl.question(question, (answer) => {
      const [action, row, col] = answer.split(",").map((input) => input.trim());

      if (!(this._isValidAction(action) && this._isValidMove(row, col))) {
        console.clear();
        console.log("Invalid action or move! Try again!");
        this.play();
        return;
      }

      this._performMove(action, row, col);

      if (this.board.isWon) {
        console.log("You Win!");
        process.exit(0);
      } else if (this.board.isLost) {
        this.board.reveal();
        console.log("You Lost");
        process.exit(0);
      }
      console.clear();
      this.play();
    });
  }

  _isValidAction(action) {
    if (!["f", "e", "s"].includes(action)) {
      return false;
    }

    return true;
  }

  _isValidMove(row, col) {
    if ([row, col].every((num) => num >= 0 && num < this.board.gridSize)) {
      return true;
    }
    return false;
  }

  _performMove(actionType, row, col) {
    const tile = this.board.grid[row][col];

    switch (actionType) {
      case "f":
        tile.toggleFlag();
        break;
      case "e":
        tile.explore();
        break;
      case "s":
        //save
        break;
    }
  }
}

module.exports = Game;
