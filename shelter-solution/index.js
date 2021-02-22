const Dog = require("./dog");
const Cat = require("./cat");
const Shelter = require("./shelter");
const User = require("./User");
// const Application = require("./application");

let bodhi = new Dog("bodhi", 5);
let pancake = new Cat("pancake", 9);
let shelter = new Shelter();
let sergey = new User("sergey", 100);
let bob = new User("bob", 10);

shelter.receiveAnimal(bodhi); // the shelter received a new animal, bodhi
shelter.receiveAnimal(pancake); // the shelter received a new animal, pancake

shelter.introduceAnimals();
// woof woof my name is bodhi
// meow meow my name is pancake
shelter.receiveApplication("bodhi", sergey); // sergey adopted a new pet, bodhi
shelter.receiveApplication("pancake", bob); // sorry bob, you are not old enough to adopt
