const Animal = require("./animal");

class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._pets = [];
  }

  getAge() {
    return this._age;
  }

  getName() {
    return this._name;
  }

  getPets() {
    return this._pets.slice();
  }

  addPet(pet) {
    if (!(pet instanceof Animal)) {
      throw new Error("only animals can be added as pets!");
    }

    this._pets.push(pet);
  }

  adoptPet(pet) {
    this.addPet(pet);
    console.log(`${this.getName()} adopted a new pet, ${pet.getName()}`);
  }
}

module.exports = User;
