# DRY Code and the Single Responsibility Principle

- Your code should be composed of functions, objects, methods, and classes, that focus on doing one thing and one thing only.  This reduces coupling, which allows for much more modular, reusable code.

## Practice - DRY up the code

- You are given a `Person` class that is doing many things more than once.
- Refactor the `Person` class and extend it with a `Passenger` and `Employee` class
  - Add the instance variables `_fullTime` which defaults to false, and `_hourlySalary` for the `Employee` class
- Refactor any functions that are doing the same thing twice or doing multiple things inside of one function.
- The `Person` class should only have properties and methods that any person can do, such as say their name and their current location
  - This should be true for the `Passenger` and `Employee` class as well.
  - Because we will have separate classes, we no longer will need the methods `purchaseTicket` or `becomeEmployee`.  We also will not need the variables `isPassenger` or `isEmployee`

- Make the constructor variables private(variable name should be preceded with an underscore: `_name`)
- Create appropriate getters for the instance variables
