const helloMessage = require("./helloMessage")

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage)

module.exports = sayMessage;