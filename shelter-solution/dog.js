const Animal = require("./animal");

class Dog extends Animal {
  constructor(name, age, hungry, tricks = []) {
    super(name, age, hungry);
    this._sound = "bark";
    this._tricks = tricks;
  }

  getTricks() {
    return this._tricks.slice();
  }

  hasTrick(trick) {
    return this._tricks.includes(trick);
  }

  learnTrick(trick) {
    if (!(typeof trick === "string")) {
      throw new Error("tricks must be strings!");
    }
    if (!this.hasTrick(trick)) {
      this._tricks.push(trick);
    } else {
      console.log(`${this.getName()} already knows ${trick}`);
    }
  }

  performTricks() {
    const tricks = this.getTricks();
    const dogName = this.getName();
    if (!tricks.length) {
      console.log(`${dogName} doesnt know any tricks`);
      return;
    }
    tricks.forEach((trick) => {
      console.log(`${dogName} performs ${trick}`);
    });
  }

  static performTricks(dogs) {
    dogs.forEach((dog) => {
      if (!(dog instanceof Dog)) {
        throw new Error(`${dog} is not an dog!`);
      } else {
        dog.performTricks();
      }
    });
  }
}

module.exports = Dog;
