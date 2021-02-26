// const { Passenger } = require('./passenger');

class Person {
  constructor(name, currentLocation) {
    this._name = name;
    this._currentLocation = currentLocation;
  }

  get name() {
    return this._name;
  }

  get currentLocation() {
    return this._currentLocation;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  sayCurrentLocation() {
    console.log(`My current location is ${this.currentLocation}`);
  }

  // Upon purchasing of a ticket, we will return a new Passenger class instance.
  // purchaseTicket(destination, plane, airport) {
  //   const passenger = new Passenger(
  //     this.name,
  //     this.currentLocation,
  //     airport,
  //     destination
  //   );
  //   // Add passenger to flight
  //   plane.addPassenger(passenger);
  // }

  // becomeEmployee(airport) {
  //   this.isEmployee = true;
  //   this.airport = airport;
  // }

  static listPeople(people) {
    people.forEach((person, index) => {
      console.log(`I am person ${index + 1}, my name is ${person.name}!`);
    });
  }
}

module.exports = Person;
