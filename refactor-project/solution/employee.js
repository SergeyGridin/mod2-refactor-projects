const Person = require('./person');

class Employee extends Person {
  constructor(name, currentLocation, airport, hourlySalary, fullTime = false) {
    super(name, currentLocation);
    this._airport = airport;
    this._hourlySalary = hourlySalary;
    this._fullTime = fullTime;
  }

  get airport() {
    return this._airport;
  }

  set airport(airport) {
    this._airport = airport;
  }

  get hourlySalary() {
    return this._hourlySalary;
  }

  set hourlySalary(salary) {
    this._hourlySalary = salary;
  }

  get fullTime() {
    return this._fullTime;
  }

  set fullTime(bool) {
    this.fullTime = bool;
  }

  // Bonus 1
  getYearlySalary() {
    let weeksPerYear = 52;
    if (this.fullTime) {
      let weeklyHours = 40;
      console.log(
        `$${weeklyHours * weeksPerYear * this.hourlySalary} per year`
      );
      return weeklyHours * weeksPerYear * this.hourlySalary;
    } else {
      let weeklyHours = 20;
      console.log(
        `$${weeklyHours * weeksPerYear * this.hourlySalary} per year`
      );
      return weeklyHours * weeksPerYear * this.hourlySalary;
    }
  }

  // Bonus 2
  static compareSalaries(employee1, employee2) {
    let employee1Salary = employee1.getYearlySalary();
    let employee2Salary = employee2.getYearlySalary();
    if (employee1Salary > employee2Salary) {
      let difference = employee1Salary - employee2Salary;
      console.log(
        `${employee1.name} makes ${difference} more than ${employee2.name}`
      );
    } else if (employee2Salary > employee1Salary) {
      let difference = employee2Salary - employee1Salary;
      console.log(
        `${employee2.name} makes ${difference} more than ${employee1.name}`
      );
    } else {
      console.log(`${employee1.name} makes the same as ${employee2.name}`);
    }
  }
}

module.exports = Employee;
