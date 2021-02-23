class ComputerPlayer {
  constructor(playerSymbol = 'o') {
    this.playerSymbol = playerSymbol;
  }

  getMove(processMove) {
    // Choose random location on board to try
    let randomMove = Math.floor(Math.random() * 9);
    console.log('processing computer move');
    processMove(randomMove);
  }
}

module.exports = ComputerPlayer;
