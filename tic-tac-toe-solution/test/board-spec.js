const chai = require('chai');
const Board = require('../board');

const expect = chai.expect;

describe('Board class', () => {
  let board;

  beforeEach('instantiate a board class', () => {
    board = new Board();
  });

  describe('the grid property', () => {
    it('should have a grid property', () => {
      expect(board).to.have.property('grid');
    });

    it('should be an array', () => {
      expect(board.grid).to.be.instanceOf(Array);
    });
  });

  it('should have a layout property', () => {
    expect(board).to.have.property('layout');
  });

  it('should have a winner property', () => {
    expect(board).to.have.property('winner');
  });
});
