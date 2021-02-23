const readline = require('readline');

class HumanPlayer {
  constructor(playerSymbol = 'x') {
    this.playerSymbol = playerSymbol;
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  getMove(processMove) {
    this.rl.question('Choose position to play token (0-8)\n> ', (answer) => {
      processMove(Number(answer));
    });
  }
}

module.exports = HumanPlayer;
