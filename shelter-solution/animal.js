class Animal {
  constructor(name, age, hungry=false) {
    this._name = name;
    this._age = age;
    this._hungry = hungry;
  }

  getAge() {
    return this._age;
  }

  getName() {
    return this._name;
  }

  isHungry() {
    return this._hungry;
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
  
  checkAnimal() {
    const hunger = this.isHungry() ? `hungry` : `well-fed`;
    console.log(`${this.getName()} is ${hunger}.`)
  }

  static checkAnimals(animals) {
    animals.forEach((animal) => {
      if (!(animal instanceof Animal)) {
        throw new Error(`${animal} is not an animal!`);
      } else {
        animal.checkAnimal()
      }
    });
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

}

module.exports = Animal;
