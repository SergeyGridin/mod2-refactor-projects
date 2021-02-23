class Tile {
  static DELTAS = Object.freeze([
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]);

  constructor(board, pos) {
    this._board = board;
    this._pos = pos;
    this._bombed = false;
    this._explored = false;
    this._flagged = false;
  }

  get adjacentBombCount() {
    return this.neighbors.filter((tile) => tile.isBombed).length;
  }

  get board() {
    return this._board;
  }

  get isBombed() {
    return this._bombed;
  }

  get isExplored() {
    return this._explored;
  }

  get isFlagged() {
    return this._flagged;
  }

  get neighbors() {
    const adjacentCoords = Tile.DELTAS.map(([dx, dy]) => [
      this.pos[0] + dx,
      this.pos[1] + dy,
    ]);

    const filteredAdjacentCoords = adjacentCoords.filter((pos) => {
      return pos.every((coord) => {
        return coord >= 0 && coord < this.board.gridSize;
      });
    });

    return filteredAdjacentCoords.map((pos) => {
      const [row, col] = pos;
      return this.board.grid[row][col];
    });
  }

  get pos() {
    return this._pos.slice();
  }

  set flagged(isFlagged) {
    this._flagged = isFlagged;
  }

  set explored(isExplored) {
    this._explored = isExplored;
  }

  explore() {
    if (this.isFlagged) return;
    if (this.isExplored) return;

    this.explored = true;
    if (!this.isBombed && this.adjacentBombCount === 0) {
      this.neighbors.forEach((tile) => tile.explore());
    }
  }

  plantBomb() {
    this._bombed = true;
  }

  render() {
    if (this.isFlagged) {
      return "F";
    } else if (this.isExplored) {
      return this.adjacentBombCount === 0 ? "_" : this.adjacentBombCount;
    } else {
      return "*";
    }
  }

  reveal() {
    // used to fully reveal board at the end
    if (this.isFlagged) {
      // mark true and false flags
      return this.isBombed ? "F" : "f";
    } else if (this.isBombed) {
      // display hit bomb as an X
      return this.isExplored ? "X" : "B";
    } else {
      return this.adjacentBombCount === 0
        ? "_"
        : this.adjacentBombCount.toString();
    }
  }

  toggleFlag() {
    if (!this.isExplored) this.flagged = !this.isFlagged;
  }
}

module.exports = Tile;
