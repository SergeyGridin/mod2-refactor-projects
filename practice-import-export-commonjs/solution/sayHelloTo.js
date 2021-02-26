const sayMessage = require("./sayMessage")


function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody")

module.exports = { sayHelloTo };