# Polymorphism

- one method can have different implementations because the result is equivalent

## Practice

- Create an `Computer` class with a constructor that takes in `price` and `yearBuilt` parameters
  - Create a method called `powerOn` that `console.log`'s "The computer has booted up"
- Create a `PC` class that `extends` the `Computer` class and takes an additional parameter `windowsVersion`
  - Create a method called `powerOn` that `console.log`'s "The PC has booted up Windows `windowsVersion`"
- Create a `Mac` class that `extends` the `Computer` class and takes an additional parameter `macVersion`
  - Create a method called `powerOn` that `console.log`'s "The Mac has booted up Mac `macVersion`"
