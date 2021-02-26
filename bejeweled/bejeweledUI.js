// IMPORTS
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const Board = require("./board")



class BejeweledUI {
  constructor(
    rows = "12345678".split(""),
    columns = "ABCDEF".split(""),
    gems = "🍦🍧🍪🍰🧁🍫🍬🍭🍮🥨".split(""),
  ) {
    this.rows = rows;
    this.columns = columns;
    this.gems = gems;
    this.board = new Board(rows.length, columns.length, gems.length)
    this.score = 0;
  }

  startGame() {
    console.log(`
      ***** BEJEWELED *****
    
HOW TO PLAY:
  1. Input two adjacent coordinates to swap (ex. 1-A 1-B).
  2. Create a row or column of three or more matching gems.
  3. Raise your score as high as you can!
`)

    this.promptUser();
  }

  promptUser() {
    this.showScore();
    this.showBoard();
    rl.question("\n> [q: quit] Swap? (ex. 1-A 2-A): ",
      (reply) => {

        // Close prompt and quit if user inputs 'q'
        if (reply.toUpperCase().includes("Q")) {
          console.log("\nGreat job! Thank you for playing! \nGoodbye.\n");
          rl.close();
          return;
        }

        const validCoords = this.verifyInput(reply)
        if (validCoords) {
          while (this.board.checkGridCombos()) {
            const combos = this.board.checkGridCombos();
            this.showCombos(combos);
            this.updateScore();
          }
        }
        this.promptUser()
      })
  }

  verifyAndParseCoords(userInput) {
    if (!userInput.includes(" ")) return false;
    const coords = userInput.split(" ").map(coord => coord.toUpperCase().split("-"))
    if (
      !this.rows.includes(coords[0][0])
      || !this.rows.includes(coords[1][0])
      || !this.columns.includes(coords[0][1])
      || !this.columns.includes(coords[1][1])
    ) {
      return false;
    }
    // return coords
    const coordA = [this.rows.indexOf(coords[0][0]), this.columns.indexOf(coords[0][1])];
    const coordB = [this.rows.indexOf(coords[1][0]), this.columns.indexOf(coords[1][1])]
    return [coordA, coordB];
  }

  verifyInput(input) {
    // Verify user inputs are:
    //  1. valid coordinates on grid
    const coords = this.verifyAndParseCoords(input)
    if (!coords) {
      console.log("OOPS! That input's no good.")
      return false;
    }
    //  2. adjacent to each other
    const isAdjacent = this.board.verifyAdjacency(coords[0], coords[1])
    if (!isAdjacent) {
      console.log("OOPS! Inputs must be adjacent.");
      return false;
    }
    //  3. able to make at least one valid combo
    const makesCombo = this.board.swapGems(coords[0], coords[1]);
    if (!makesCombo) {
      console.log("OOP! Inputs don't make any combos.");
      return false;
    }
    return coords;
  }

  showScore() {
    console.log(`    SCORE: ${this.score}`);
  }

  showBoard() {
    console.log("\t    " + this.columns.join("  "));
    this.rows.forEach((row, i) => {
      const gems = this.board.getRow(i).map(ri => this.gems[ri]);
      console.log(`\t ${row} ${gems.join(" ")}`);
    })
  }

  showCombos(comboCoords) {
    let comboMsg = "\nCombo! ";
    comboCoords.forEach(coord => {
      comboMsg += ` ${this.rows[coord[0]]}${this.columns[coord[1]]}`;
      comboMsg += `${this.gems[this.board.getGem(coord[0], coord[1])]}`;
    })
    console.log(comboMsg)
  }

  updateScore() {
    const combos = this.board.checkGridCombos()
    if (combos) {
      this.score += combos.length;
      this.board.updateBoardGems(combos);
    }
  }
  
}


module.exports = BejeweledUI;