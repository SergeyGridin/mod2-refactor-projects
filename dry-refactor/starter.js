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
