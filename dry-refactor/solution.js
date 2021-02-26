// Person class
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

  static listPeople(people) {
    people.forEach((person, index) => {
      console.log(`I am person ${index + 1}, my name is ${person.name}!`);
    });
  }
}

// Passenger child class
class Passenger extends Person {
  constructor(name, currentLocation, airport = null, ticket = '') {
    super(name, currentLocation);
    this._airport = airport;
    this._ticket = ticket;
  }

  get airport() {
    return this._airport;
  }

  get ticket() {
    return this._ticket;
  }

  static compareTickets(person1, person2) {
    console.log(`${person1.name} has a ticket to ${person1.ticket}`);
    console.log(`${person2.name} has a ticket to ${person2.ticket}`);

    if (person1.ticket === person2.ticket) {
      console.log(`We are going to the same place`);
    } else {
      console.log(`We are not going to the same place`);
    }
  }
}

// Employee child class
class Employee extends Person {
  constructor(
    name,
    currentLocation,
    airport = null,
    hourlySalary,
    fullTime = false
  ) {
    super(name, currentLocation);
    this._airport = airport;
    this._hourlySalary = hourlySalary;
    this._fullTime = fullTime;
  }

  get airport() {
    return this._airport;
  }

  get hourlySalary() {
    return this._hourlySalary;
  }

  get fullTime() {
    return this._fullTime;
  }
}
