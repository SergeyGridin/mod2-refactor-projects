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
const nums = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"]


class Bejeweled {
  constructor(rows, columns) {
    this.board = new Board(rows, columns)
    this.score = 0;
  }

  startGame() {
    console.log(`
  BEJUICED
    
    HOW TO PLAY:
      1. Input coordinates for two adjacent gems to swap.
      2. Create a row or column of three or more matching gems.
      3. Raise your high score until there are no more combinations.
    `)

    this.promptUser();
  }

  promptUser() {
    this.showScore()
    this.showBoard()

    rl.question("> What gems would you like to swap? Input coordinates (ex. 1A,2A): ",
      (reply) => {

        if (reply.includes("q")) {
          rl.close();
        } else {
          const coords = this.verifyInputCoords(reply)
          if (!coords) {
            console.log("OOPS! That input's no good.")
          } else {

            const isAdjacent = this.board.verifyAdjacency(coords[0], coords[1])
            const makesCombo = this.board.swapGems(coords[0], coords[1])

            if (!isAdjacent) {
              console.log("OOPS! Inputs must be adjacent.")

            } else if (!makesCombo) {
              console.log("OOP! Inputs don't make any combos.")

            } else {
              this.showMatches();
              this.updateScore();
            }
          }
          this.promptUser()
        }

      })
  }

  verifyInputCoords(userInput) {
    if (!userInput.includes(",")) return false;
    const coords = userInput.split(",").map(coord => [Number(coord[0]), coord[1].toUpperCase()])
    const colChars = this.board.colChars
    const rowNums = this.board.rowCount.length
    if (
      // Check if coords have valid chars
      !colChars.includes(coords[0][1])
      || !colChars.includes(coords[1][1])
      // Check if coords have valid nums
      || coords[0][0] > rowNums
      || coords[1][0] > rowNums
      || Number.isNaN(coords[0][0])
      || Number.isNaN(coords[1][0])
    ) {
      return false;
    }

    return coords;
  }

  showScore() {
    console.log(`    SCORE: ${this.score}\n`)
  }

  showBoard() {
    console.log("       " + this.board.colChars.join("  "));
    for (let i = 0; i < this.board.rowCount; i++) {
      console.log("    " + (i + 1) + " " + this.board.getRow(i).join(" "))
    }
    this.showMatches()
    console.log("\n")
  }

  showMatches() {
    const matches = this.board.checkGridMatches()
    if (matches) {
      let comboMsg = "\nCombo! ";
      matches.forEach(match => comboMsg += `${match[0]}${match[1]} `)
      console.log(comboMsg)
    }
  }

  updateScore() {
    const matches = this.board.checkGridMatches()
    if (matches) {
      this.score += matches.length;
      this.board.updateBoardGems(matches)
    }
  }

}


const bejeweled = new Bejeweled(8, 8)
bejeweled.startGame()
