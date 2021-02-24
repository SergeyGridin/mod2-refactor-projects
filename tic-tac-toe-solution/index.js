const TicTacToeGame = require('./game');
const ComputerPlayer = require('./computerPlayer');
const HumanPlayer = require('./humanPlayer');

const player1 = new HumanPlayer();
const player2 = new HumanPlayer('o');
const player3 = new ComputerPlayer();
const game = new TicTacToeGame(player1, player2);
// game.start();
