// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   bark() {
//     console.log("Bark");
//   }
// }

// class Person {
//   constructor(name, age, dogs = []) {
//     this.name = name;
//     this.age = age;
//     this.dogs = dogs;
//   }

//   addDog(dog) {
//     if (!(dog instanceof Dog)) {
//       throw new TypeError("Can only add dogs!");
//     }
//     this.dogs.push(dog);
//   }

//   walkDogs() {
//     this.dogs.forEach((dog) => {
//       console.log(`walking ${dog.name}`);
//     });
//   }
// }

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype.bark = function () {
  console.log("Bark");
};

function Person(name, age, dogs = []) {
  this.name = name;
  this.age = age;
  this.dogs = dogs;
}

Person.prototype.addDog = function (dog) {
  if (!(dog instanceof Dog)) {
    throw new TypeError("Can only add dogs!");
  }
  this.dogs.push(dog);
};

Person.prototype.walkDogs = function () {
  this.dogs.forEach((dog) => {
    console.log(`walking ${dog.name}`);
  });
};

const sammy = new Dog("sammy", 15);
const buch = new Dog("buch", 13);
const pickles = new Dog("pickles", 9);

const alex = new Person("alex", 31);
const ali = new Person("ali", 21, [buch, pickles]);
const michael = new Person("michael", 22, [sammy]);

alex.walkDogs();
ali.walkDogs();
michael.walkDogs();

// alex.addDog("mars"); // must throw an error
const mars = new Dog("mars", 8);
alex.addDog(mars);
alex.walkDogs();

// 2.

Array.prototype.isEqual = function (array) {
  if (!array || this.length != array.length) return false;

  for (let i = 0; i < array.length; i++) {
    if (this[i] !== array[i]) {
      return false;
    }
  }
  return true;
};

const result = [1, 2, 3].isEqual([1, 3, 2]);
const result2 = [1, 2, 3].isEqual([1, 2, 3]);
console.log(result, result2);
