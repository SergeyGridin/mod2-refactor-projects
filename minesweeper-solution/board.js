const Tile = require("./tile");

class Board {
  constructor(gridSize, numBombs, loading = false) {
    this._gridSize = gridSize;
    this._numBombs = numBombs;

    if (!loading) this._generateBoard();
  }

  static loadBoard(boardState) {
    const board = new Board(boardState._gridSize, boardState._numBombs, true);

    const grid = [];
    boardState._grid.forEach((rowState) => {
      let row = [];
      rowState.forEach((tileState) => {
        const tile = Tile.loadTile(board, tileState);
        row.push(tile);
      });
      grid.push(row);
    });

    board._grid = grid;

    return board;
  }

  get grid() {
    return this._grid.slice();
  }

  get gridSize() {
    return this._gridSize;
  }

  get isLost() {
    return this.grid.flat().some((tile) => tile.isBombed && tile.isExplored);
  }

  get isWon() {
    return this.grid.flat().every((tile) => tile.isBombed !== tile.isExplored);
  }

  get numBombs() {
    return this._numBombs;
  }

  render(reveal = false) {
    // reveal is used to fully reveal the board at game end
    console.table(
      this.grid.map((row) => {
        return row.map((tile) => {
          return reveal ? tile.reveal() : tile.render();
        });
      })
    );
  }

  reveal() {
    this.render(true);
  }

  _generateBoard() {
    const grid = [];
    for (let rowIdx = 0; rowIdx < this.gridSize; rowIdx++) {
      const row = [];
      for (let colIdx = 0; colIdx < this.gridSize; colIdx++) {
        const tile = new Tile(this, [rowIdx, colIdx]);
        row.push(tile);
      }
      grid.push(row);
    }
    this._grid = grid;

    this._plantBombs();
  }

  _plantBombs() {
    let totalBombs = 0;

    while (totalBombs < this.numBombs) {
      const randRow = Math.floor(Math.random() * this.gridSize);
      const randCol = Math.floor(Math.random() * this.gridSize);

      const tile = this.grid[randRow][randCol];
      if (tile.isBombed) continue;
      tile.plantBomb();
      totalBombs++;
    }
  }
}

module.exports = Board;
