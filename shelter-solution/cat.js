const Animal = require("./animal");

class Cat extends Animal {
  constructor(name, age, hungry, evil = false) {
    super(name, age, hungry);
    this._sound = "purr";
    this._evil = evil;
  }

  isEvil() {
    return !!this._evil;
  }

  please() {
    this._evil = false;
  }

  speak() {
    if (this.isEvil()) {
      return "I am an evil cat! I am not going to speak unless you feed me!";
    } else {
      return super.speak();
    }
  }

  feed() {
    if (this.isHungry()) {
      super.feed();
      this.please();
    }
  }
}

module.exports = Cat;
