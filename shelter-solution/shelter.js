const Application = require("./application");
const Animal = require("./animal");

class Shelter {
  constructor() {
    this._animals = [];
    this._adoptions = [];
  }

  getAnimals() {
    return this._animals.slice();
  }

  addAnimal(animal) {
    if (!(animal instanceof Animal)) {
      throw new Error("only instances of Animal class can be added");
    }
    this._animals.push(animal);
  }

  addAdoption(adoption) {
    if (!(adoption instanceof Application)) {
      throw new Error(
        "only instances of Application class can be added as adoptions"
      );
    }
  }

  introduceAnimals() {
    const animals = this.getAnimals();
    animals.forEach((animal) => {
      console.log(animal.speak());
    });
  }

  receiveAnimal(animal) {
    this.addAnimal(animal);
    console.log(`the shelter received a new animal, ${animal.name}`);
  }

  removeAnimal(animalToBeAdopted) {
    this._animals = this._animals.filter((animal) => {
      if (animal !== animalToBeAdopted) return animal;
    });
  }

  processAdoption(animal, user) {
    this.removeAnimal(animal);
    user.adoptPet(animal);
  }

  receiveApplication(animalName, user) {
    let animal = this.findAnimal(animalName);
    let app = new Application(animal, user);
    if (app.isValid()) {
      this.addAdoption(app);
      this.processAdoption(animal, user);
    } else {
      console.log(`sorry ${user.name}, you're not old enough to adopt`);
    }
  }

  findAnimal(animalName) {
    const animals = this.getAnimals();
    for (let i = 0; i < animals.length; i++) {
      let animal = animals[i];
      if (animal.getName() === animalName) return animal;
    }
  }
}

module.exports = Shelter;
