const Airport = require('./airport');
const Person = require('./person');

class Passenger extends Person {
  constructor(name, currentLocation, airport = null, destination = '') {
    super(name, currentLocation);
    this._airport = airport;
    this._destination = destination;
    this._boardedPlane = false;
  }

  get airport() {
    return this._airport;
  }

  set airport(airport) {
    this._airport = airport;
  }

  get destination() {
    return this._destination;
  }

  set destination(destination) {
    this._destination = destination;
  }

  get boardedPlane() {
    return this._boardedPlane;
  }

  set boardedPlane(bool) {
    this._boardedPlane = bool;
  }

  static compareTickets(person1, person2) {
    console.log(`${person1.name} has a ticket to ${person1.destination}`);
    console.log(`${person2.name} has a ticket to ${person2.destination}`);

    if (person1.destination === person2.destination) {
      console.log(`We are going to the same place`);
    } else {
      console.log(`We are not going to the same place`);
    }
  }

  enterAirport(airport) {
    if (!(airport instanceof Airport)) {
      throw new Error('Must provide an Airport class instance as an argument!');
    }
    this.airport = airport;
  }

  boardPlane() {
    this.boardedPlane = true;
    console.log(`Boarding the plane...`);
  }

  leavePlane() {
    this.boardedPlane = false;
    console.log(`Forget this! Getting off flight...`);
  }
}

module.exports = Passenger;
