class HumanPlayer {
  constructor(playerSymbol = 'x') {
    this.playerSymbol = playerSymbol;
  }

  getMove(processMove, rl) {
    rl.question('Choose position to play token (0-8)\n> ', (answer) => {
      processMove(Number(answer));
    });
  }
}

module.exports = HumanPlayer;
