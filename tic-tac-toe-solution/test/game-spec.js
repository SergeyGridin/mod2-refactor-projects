const chai = require('chai');
const spies = require('chai-spies');
const Board = require('../board');
const ComputerPlayer = require('../computerPlayer');
const TicTacToeGame = require('../game');
const HumanPlayer = require('../humanPlayer');

const expect = chai.expect;
chai.use(spies);

describe('TicTacToeGame constructor', () => {
  let game, player1, player2;

  beforeEach('Instantiate a new game', () => {
    player1 = new HumanPlayer('x');
    player2 = new ComputerPlayer('o');
    game = new TicTacToeGame(player1, player2, 'test');
  });

  it('should have player1 property', () => {
    let expected = 'player1';

    expect(game).to.have.property(expected);
  });

  it('should have player2 property', () => {
    let expected = 'player2';

    expect(game).to.have.property(expected);
  });

  context('board property', () => {
    it('should have board property', () => {
      let expected = 'board';

      expect(game).to.have.property(expected);
    });

    it('board property to be instance of Board class', () => {
      let test = game.board;

      expect(test).to.be.instanceOf(Board);
    });
  });

  it('should have processGameOver method', () => {
    let testMethod = game.processGameOver;

    expect(testMethod).to.exist;
  });

  it('should have processMove method', () => {
    let testMethod = game.processMove;

    expect(testMethod).to.exist;
  });

  it('should have a processDraw method', () => {
    let testMethod = game.processDraw;

    expect(testMethod).to.exist;
  });

  it('should have a start method', () => {
    let testMethod = game.start;

    expect(testMethod).to.exist;
  });
});
