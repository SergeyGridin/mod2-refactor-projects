const Animal = require("./animal");
const Dog = require("./dog");
const Cat = require("./cat");
const Shelter = require("./shelter");
const User = require("./user");
// const Application = require("./application");

const sammy = new Dog("Sammy", 5, true);
const prince = new Dog("Prince", 10)
const pancake = new Cat("Pancake", 9, true, true);
const waffle = new Cat("Waffle", 2);
const shelter = new Shelter();
const sergey = new User("Sergey", 100);
const mira = new User("Mira", 10);
const animals = [sammy, prince, pancake, waffle]

shelter.receiveAnimal(sammy); // the shelter received a new animal, Sammi
shelter.receiveAnimal(prince); // the shelter received a new animal, Prince
shelter.receiveAnimal(pancake); // the shelter received a new animal, Pancake
shelter.receiveAnimal(waffle); // the shelter received a new animal, Waffle

shelter.introduceAnimals();
// My name is Sammy, bark
// My name is Prince, bark
// My name is Pancake, purr
// I am an evil cat! I am not going to speak unless you feed me!

Animal.checkAnimals(animals)
Animal.feedAnimals(animals)
Animal.checkAnimals(animals)


Dog.performTricks([sammy, prince])
sammy.learnTrick('chase tail')
sammy.learnTrick('shake paws')
prince.learnTrick('sit')
prince.learnTrick('stay')
prince.learnTrick('sleep')
Dog.performTricks([sammy, prince])

// My name is Waffle, purr

shelter.receiveApplication("Sammy", sergey); // Sergey adopted a new pet, bodhi
shelter.receiveApplication("Pancake", mira); // sorry Mira, you are not old enough to adopt
