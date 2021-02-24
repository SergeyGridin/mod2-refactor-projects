const Board = require('./board');
const fs = require('fs');
const readline = require('readline');
const HumanPlayer = require('./humanPlayer');

class TicTacToeGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.board = new Board();
    this.turns = 0;
    this.rl = readline.createInterface(process.stdin, process.stdout);
    this.loadGameState();
  }

  playTurn() {
    const readline = this.rl;
    console.clear();
    this.displayStatus();
    this.currentPlayer.getMove((pos) => this.processMove(pos), readline);
  }

  displayStatus() {
    this.board.display();
    console.log('*******************************');
  }

  updateGame(state) {
    console.log('Loading saved game...\n');
    this.currentPlayer =
      state.currentPlayerSymbol === 'x' ? this.player1 : this.player2;
    this.board.grid = state.grid;
    this.turns = state.turns;
    this.playTurn();
  }

  processMove(pos) {
    // console.clear();

    if (this.board.isValidMove(pos)) {
      this.board.addToken(pos, this.currentPlayer.playerSymbol);
      this.turns++;
      // Check for win
      if (this.board.checkForWin()) {
        return this.processGameOver();
      }
      // Check for tie
      if (this.turns === 9) {
        return this.processDraw();
      } else {
        this.currentPlayer = this.turns % 2 === 0 ? this.player1 : this.player2;
        this.saveGameState();
        this.playTurn();
      }
    } else {
      console.log('Not a valid move, please try again');
      this.playTurn();
    }
  }

  processGameOver() {
    this.board.display();
    console.log(`\n${this.board.winner} wins in ${this.turns} turns!`);

    // Close readlines
    this.rl.close();
  }

  processDraw() {
    this.board.display();
    console.log("\nThe game is over and it's a draw!");

    // Close readlines
    this.rl.close();
  }

  saveGameState() {
    // Create a POJO from our current game state
    const grid = this.board.grid;
    const currentPlayerSymbol = this.currentPlayer.playerSymbol;
    const turns = this.turns;
    const state = {
      currentPlayerSymbol,
      grid,
      turns,
    };

    // Stringify our POJO
    const jsonString = JSON.stringify(state);

    // Write file to disk
    fs.writeFileSync('./ttt.json', jsonString, (err) => {
      if (err) {
        throw new Error('Something went wrong in writing the file!');
      }
      console.log('Game saved!');
    });
  }

  loadGameState() {
    // Check if file exists
    fs.access('./ttt.json', fs.constants.F_OK, (err) => {
      if (err) {
        console.log('Save file does not exist, starting new game...\n');
        this.board.display();
        return this.playTurn();
      }

      // If file does exist, we need to read it
      let gameState = fs.readFileSync('./ttt.json');
      const state = JSON.parse(gameState);
      this.updateGame(state);
      this.playTurn();
    });
  }
}

module.exports = TicTacToeGame;
