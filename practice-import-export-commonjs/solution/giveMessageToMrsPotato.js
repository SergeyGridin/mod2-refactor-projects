
const { sayHelloTo } = require("./sayHelloTo")

// DO NOT CHANGE THIS CODE
sayHelloTo("Buzz");

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

module.exports = giveMessageToMrsPotato;
