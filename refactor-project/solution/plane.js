class Plane {
  constructor(location, destination) {
    this._location = location;
    this._destination = destination;
    this._passengers = [];
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._location = location;
  }

  get destination() {
    return this._destination;
  }

  set destination(destination) {
    this._destination = destination;
  }

  get passengers() {
    return this._passengers;
  }

  // Add passenger to plane
  addPassenger(passenger) {
    this.passengers.push(passenger);
  }

  addPassengers(passengers) {
    passengers.forEach((passenger) => this.passengers.push(passenger));
  }

  listPassengers() {
    this.passengers.forEach((passenger) => {
      console.log(passenger);
    });
  }

  showLocationAndDestination() {
    console.log(
      `Current Location: ${this.location}, Destination: ${this.destination}`
    );
  }
}

module.exports = Plane;
