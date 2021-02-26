const Airport = require('./airport');
const Plane = require('./plane');
const Person = require('./person');
const Passenger = require('./passenger');
const Employee = require('./employee');

// Initialize variables
const plane1 = new Plane('Toronto', 'Russia');
const plane2 = new Plane('Florida', 'Pennsylvania');
const plane3 = new Plane('Marylan', 'Hawaii');
const person1 = new Person('Michael Shuff', 'Florida');
const person2 = new Person('Sergey Gridin', 'Toronto');
const person3 = new Person('Ali Kim', 'Maryland');
const airport = new Airport();
const airport2 = new Airport();

/******  AIRPORT TESTING ******/
// Testing addPlane and addPlanes
airport.addPlane(plane1);
airport.addPlane(plane2);
// airport.addPlanes([plane1, plane2]);

// // Testing getters
// console.log(airport.planes);
// console.log(airport.employees);
// console.log(airport.planeCount);

// // Testing getCurrentPlaneLocation
// console.log(airport.getCurrentPlaneLocation(plane1));

// // Testing getPlaneDestination
// console.log(airport.getPlaneDestination(plane1));

// // Testing showAllPlaneTrips
// airport.showAllPlaneTrips();

/******  PLANE TESTING ******/
// // getters
// console.log(plane1.location);
// console.log(plane1.destination);
// console.log(plane1.passengers);

// // addPassenger, addPassengers, and listPassengers
// plane1.addPassenger('Mike');
// plane1.addPassengers(['Sergey', 'Ali']);
// console.log(plane1.passengers);
// plane1.listPassengers();

// // showLocationAndDestination
// plane1.showLocationAndDestination();

/****** PERSON TESTING ******/
// // Test getters
// console.log(person1.name);
// console.log(person1.currentLocation);

// // Testing sayName and sayCurrentLocation
// person1.sayName();
// person1.sayCurrentLocation();

// // Testing purchaseTicket
// let passenger1 = person1.purchaseTicket('Pennsylvania', plane2, airport);
// console.log(passenger1);

// // Testing listPeople
// Person.listPeople([person1, person2, person3]);

/****** PASSENGER TESTING  ******/
const passenger1 = new Passenger('Michael', 'Florida', airport, 'Pennsylvania');
const passenger2 = new Passenger('Sergey', 'Toronto', airport, 'Russia');
const passenger3 = new Passenger('Ali', 'Maryland', airport, 'Hawaii');
// console.log(passenger1.destination);
// console.log(passenger1);
// passenger1.enterAirport(airport2);
// console.log(passenger1);

// // Testing Passenger.compareTickets and destination setter
// Passenger.compareTickets(passenger1, passenger2);
// passenger2.destination = 'Pennsylvania';
// Passenger.compareTickets(passenger1, passenger2);

// // Testing inheritance
// passenger1.sayName();
// passenger2.sayName();

// // Testing boarding and leaving plane
// console.log(passenger1.boardedPlane);
// passenger1.boardPlane();
// console.log(passenger1.boardedPlane);
// passenger1.leavePlane();
// console.log(passenger1.boardedPlane);

/****** EMPLOYEE TESTING  ******/
const employee1 = new Employee('John', 'Pennsylvania', airport, 20, true);
const employee2 = new Employee('Mary', 'Wisconsin', airport, 30, false);
const employee3 = new Employee('Juniper', 'Serbia', airport, 30, false);
// console.log(employee1);
// console.log(employee2);

// // testing airport addEmployee and addEmployees methods
// airport.addEmployee(employee1);
// // airport.addEmployee(passenger1); // Throws error
// airport.addEmployees([employee2, employee3]);
// console.log(airport);

//// Testing getYearlySalary
// employee1.getYearlySalary();
// employee2.getYearlySalary();

// // Testing Employee.compareSalaries
// Employee.compareSalaries(employee1, employee2);
// Employee.compareSalaries(employee2, employee1);
// Employee.compareSalaries(employee2, employee3);
