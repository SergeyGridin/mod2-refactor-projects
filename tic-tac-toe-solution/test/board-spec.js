const chai = require('chai');
const spies = require('chai-spies');
const Board = require('../board');

const expect = chai.expect;
chai.use(spies);

describe('Board class', () => {
  let board;

  beforeEach('instantiate a board class', () => {
    board = new Board();
  });

  describe('the grid property', () => {
    it('should be an array', () => {
      const gameBoard = board.grid;

      expect(gameBoard).to.be.instanceOf(Array);
    });
  });

  describe('addToken method', () => {
    it('should throw a TypeError if not given a number', () => {
      let callback = () => board.addToken('s');

      expect(callback).to.throw(TypeError);
    });
  });

  describe('checkForWin method', () => {
    it('should call checkRows method once', () => {
      let rowsSpy = chai.spy.on(board, 'checkRows');

      board.checkForWin();
      expect(rowsSpy).to.have.been.called.once;
    });

    it('should call the checkColumns method once', () => {
      let columnsSpy = chai.spy.on(board, 'checkColumns');

      board.checkForWin();
      expect(columnsSpy).to.have.been.called.once;
    });

    it('should call the checkDiagonals method once', () => {
      let diagonalsSpy = chai.spy.on(board, 'checkDiagonals');

      board.checkForWin();
      expect(diagonalsSpy).to.have.been.called.once;
    });
  });

  describe('isValidMove method', () => {
    it('should return false if given a number not between 0-8', () => {
      let result = board.isValidMove(9);

      expect(result).to.be.false;
    });

    it('should return true if given a number between 0-8', () => {
      let result = board.isValidMove(5);
      let result2 = board.isValidMove(0);

      expect(result).to.be.true;
      expect(result2).to.be.true;
    });

    it('should return false if the position has already been marked', () => {
      board.addToken(0, 'x');

      let result = board.isValidMove(0);

      expect(result).to.be.false;
    });
  });

  describe('displaySymbol method', () => {
    it("should return ' '(one space) if given ''(empty string)", () => {
      let symbol = '';
      let expected = ' ';

      let result = board.displaySymbol(symbol);

      expect(result).to.equal(expected);
    });

    it('should return the symbol given if given a truthy value', () => {
      let symbol = 'x';
      let expected = 'x';

      let result = board.displaySymbol(symbol);

      expect(result).to.equal(expected);
    });
  });

  it('should have a grid property', () => {
    let expected = 'grid';

    expect(board).to.have.property(expected);
  });

  it('should have a render method', () => {
    let test = board.render;

    expect(test).to.exist;
  });

  it('should have a winner property', () => {
    let expected = 'winner';

    expect(board).to.have.property(expected);
  });

  it('should have a checkForWin method', () => {
    let checkForWin = board.checkForWin;
    expect(checkForWin).to.exist;
  });
});
