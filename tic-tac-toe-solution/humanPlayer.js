class HumanPlayer {
  constructor(playerSymbol = 'x') {
    this.playerSymbol = playerSymbol;
  }

  getMove(processMove, rl) {
    rl.question('Choose position to play token (0-8)\n> ', (answer) => {
      let move = Number(answer);

      if (Number.isNaN(move)) throw new Error('You must input a number!');

      processMove(move);
    });
  }
}

module.exports = HumanPlayer;
