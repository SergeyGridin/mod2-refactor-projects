const chai = require('chai');
const ComputerPlayer = require('../computerPlayer');
const HumanPlayer = require('../humanPlayer');

const expect = chai.expect;

describe('HumanPlayer class', () => {
  let player1, player2;

  beforeEach('Set up HumanPlayer instance', () => {
    player1 = new HumanPlayer('x');
    player2 = new HumanPlayer('o');
  });

  it('should have playerSymbol property', () => {
    expect(player1).to.have.property('playerSymbol');
  });

  it('should allow custom input for playerSymbol upon instantiation', () => {
    expect(player1.playerSymbol).to.equal('x');
    expect(player2.playerSymbol).to.equal('o');
  });

  it('should have a getMove method', () => {
    expect(player1.getMove).to.exist;
  });
});

describe('ComputerPlayer class', () => {
  let cpuPlayer, cpuPlayer2;

  beforeEach('Set up ComputerPlayer instance', () => {
    cpuPlayer = new ComputerPlayer('x');
    cpuPlayer2 = new ComputerPlayer();
  });

  it('should have playerSymbol property', () => {
    expect(cpuPlayer).to.have.property('playerSymbol');
  });

  it("playerSymbol property should default to 'o'", () => {
    expect(cpuPlayer2.playerSymbol).to.equal('o');
  });

  it('should have a getMove method', () => {
    expect(cpuPlayer.getMove).to.exist;
  });
});
