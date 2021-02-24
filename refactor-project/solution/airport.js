const Plane = require('./plane.js');

class Airport {
  constructor() {
    this._planes = [];
    this._employees = [];
    this._planeCount = 0;
  }

  get planes() {
    return this._planes;
  }

  get employees() {
    return this._employees;
  }

  get planeCount() {
    return this._planeCount;
  }

  // Add plane and increase plane count for airport
  addPlane(plane) {
    this._planes.push(plane);
    this._planeCount++;
  }

  // Add multiple planes
  addPlanes(planes) {
    planes.forEach((plane) => this.addPlane(plane));
  }

  // Check if plane belongs to current airport
  ownsPlane(plane) {
    if (!(plane instanceof Plane)) {
      throw new Error('Must provide a plane as an argument!');
    }
    let planes = this.planes;
    return planes.includes(plane);
  }

  // Grab plane location
  getCurrentPlaneLocation(plane) {
    if (this.ownsPlane(plane)) {
      return plane.location;
    }
    console.log("That plane doesn't belong to this airport.");
  }

  // Grab plane destination
  getPlaneDestination(plane) {
    if (this.ownsPlane(plane)) {
      return plane.destination;
    }
    console.log("That plane doesn't belong to this airport.");
  }

  // Show all plane trips at airport
  showAllPlaneTrips() {
    this.planes.forEach((plane, index) => {
      let location = this.getCurrentPlaneLocation(plane);
      let destination = this.getPlaneDestination(plane);
      console.log(
        `Plane #${
          index + 1
        } is currently in ${location} and heading to ${destination}`
      );
    });
  }

  // Add employee to airport
  addEmployee(employee) {
    this.employees.push(employee);
  }

  // Add employees to airport
  addEmployees(employees) {
    employees.forEach((employee) => this.addEmployee(employee));
  }

  // List employees of airport
  listEmployees() {
    this.employees.forEach((employee) => {
      console.log(`Name: ${employee.name}, Salary: ${employee.salary}`);
    });
  }
}

module.exports = Airport;
