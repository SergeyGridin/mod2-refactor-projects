// 1.

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

// 2. Monkeypatch an array class with isEqual method
