class Airport {
  constructor() {
    this.planes = [];
    this.employees = [];
    this.planeCount = 0;
  }

  static listLocationAndPlaneDestinations(planes) {
    planes.forEach((plane) => {
      console.log(`location: ${location}`);
    });

    planes.forEach((plane) => {
      console.log(`destination: ${plane.destination}`);
    });
  }

  addPlane(plane) {
    this.planes.push(plane);
    this.planeCount++;
  }

  addPlanes(planes) {
    planes.forEach((plane) => {
      this.planes.push(plane);
      this.planeCount++;
    });
  }

  listEmployees(employees) {
    employees.forEach((employee) => {
      console.log(`Name: ${employee.name}, Salary: ${employee.salary}`);
    });
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  addEmployees(employees) {
    employees.forEach((employee) => {
      this.employees.push(employee);
    });
  }
}

class Plane {
  constructor(location, destination) {
    this.location = location;
    this.destination = destination;
    this.passengers = [];
  }

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

class Person {
  constructor(name, currentLocation, isEmployee, isPassenger) {
    this.name = name;
    this.currentLocation = currentLocation;
    this.ticket = '';
    this.isEmployee = isEmployee;
    this.isPassenger = isPassenger;
    this.airport = null;
  }

  sayNameAndCurrentLocation() {
    console.log(
      `My name is ${this.name} and I am currently in ${this.currentLocation}`
    );
  }

  purchaseTicket(location, plane) {
    this.ticket = location;
    plane.passengers.push(this);
    this.isPassenger = true;
  }

  becomeEmployee(airport) {
    this.isEmployee = true;
    this.airport = airport;
  }

  listPeople(people) {
    people.forEach(person, (index) => {
      console.log(`I am person ${index}, my name is ${person.name}!`);
    });
  }

  compareTickets(person1, person2) {
    console.log(`${person1.name} has a ticket to ${person1.ticket}`);
    console.log(`${person2.name} has a ticket to ${person2.ticket}`);

    if (person1.ticket === person2.ticket) {
      console.log(`We are going to the same place`);
    } else {
      console.log(`We are not going to the same place`);
    }
  }
}

const plane1 = new Plane('Toronto', 'Russia');
const plane2 = new Plane('Florida', 'Pennsylvania');
const plane3 = new Plane('Marylan', 'Hawaii');
const person1 = new Person('Michael Shuff', 'Florida', false, true);
const person2 = new Person('Sergey Gridin', 'Toronto', false, true);
const person3 = new Person('Ali Kim', 'Maryland', false, true);
const airport = new Airport();

console.log(plane1);
console.log(airport);
console.log(person1);
