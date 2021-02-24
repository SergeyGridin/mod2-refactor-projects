// Use context binding (bind, call, and apply) a few times during the project 
// where best applied (having a method as a callback function or saved to a 
// variable and called later)

// A Candy Crush/Bejeweled-like game that can be played through the terminal. Make 
// the rules as simple as possible with some unique blocks (ex: if you match 
//   a special block with other normal blocks, then it deletes a whole row).

// Create class, instance and static methods and variables
// Inheritance
// Overriding parent class methods (can be static or instance)

// Terminal Bejeweled
// 8x8 board
// 5 types of jewels
// Randomized board of jewels
// If there is 3+ match jewels in a row, remove jewels, add points, and push
// jewels down to fill the empty space
// High score system, no levels

// Start game. Show title, instructions, board
//  Score, grid and gems, input line
// User can input Number-Letter NumberLetter
// If invalid input, re-prompt
// If valid but swap does not create valid combo, state msg and reprompt
// If valid and creates valid combo(s), eliminate gems, move down to fill columns, add new gems to fill spaces, recalculate, etc.

const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const Board = require("./board")

const fruit = "🍇🍈🍉🍊🍋🍌🍍🥭🍎🍐🍑🍒🍓🥝🥥"


class Bejeweled {
  constructor(rows, columns, score = 0) {
    this.score = score;
    this.board = new Board(rows, columns)
  }

  startGame() {
    console.log(`
  BEJUICED
    
    HOW TO PLAY:
      1. Input coordinates for two adjacent gems to swap.
      2. Create a row or column of three or more matching gems.
      3. Raise your high score until there are no more combinations.
    `)
  }

  promptUser() {
    rl.question("> What gems would you like to swap? Input coordinates (ex. A1,A2): ",
      (reply) => {
        const coords = this.verifyInputCoords(reply)
        console.log(coords)
        rl.close()
      })
  }

  verifyInputCoords(userInput) {
    if (!userInput.includes(",")) return false;
    const coords = userInput.split(",").map(coord => [coord[0].toUpperCase(), Number(coord[1])])
    const rowChars = this.board.rowChars
    const colNums = this.board.colNums.length
    console.log("coords", coords)
    if (
      !rowChars.includes(coords[0][0])
      || !rowChars.includes(coords[1][0])
      || coords[0][1] > colNums
      || coords[1][1] > colNums
      || Number.isNaN(coords[0][1])
      || Number.isNaN(coords[1][1])
    ) {
      return false;
    }
    
    return coords;
  }

  showScore() {
    console.log(`    SCORE: ${this.score}\n`)
  }

  showBoard() {
    console.log("      " + this.board.colNums.join("  "));

    this.board.rowChars.map((rowChar, ri) => {
      console.log("    " + rowChar + " " + this.board.getRow(ri).join(" "))
    })
    this.board.checkGridMatches()
  }

  renderGUI() {
    this.showScore()
    this.showBoard()
    this.promptUser()
  }

}

const bejeweled = new Bejeweled(8, 8)
bejeweled.startGame()
bejeweled.renderGUI()
