class Animal {
  constructor(name, age, hungry) {
    this._name = name;
    this._age = age;
    this._hungry = hungry;
    this._clean = true;
  }

  getAge() {
    return this._age;
  }

  getName() {
    return this._name;
  }

  isHungry() {
    return !!this._hungry;
  }

  makeSound() {
    return `${this._sound}`;
  }

  speak() {
    return `My name is ${this.getName()}, ${this.makeSound()}`;
  }

  feed() {
    this._hungry = false;
  }

  clean() {
    this._clean = true;
  }

  static feedAnimals(animals) {
    animals.forEach((animal) => {
      if (!(animal instanceof Animal)) {
        throw new Error(`${animal} is not an animal!`);
      } else {
        animal.feed();
      }
    });
  }

  static cleanAnimals(animals) {
    animals.forEach((animal) => {
      if (!(animal instanceof Animal)) {
        throw new Error(`${animal} is not an animal!`);
      } else {
        animal.clean();
      }
    });
  }
}

module.exports = Animal;
