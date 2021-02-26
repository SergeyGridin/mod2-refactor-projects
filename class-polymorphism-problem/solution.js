class Computer {
  constructor(price, yearBuilt) {
    this.price = price;
    this.yearBuilt = yearBuilt;
  }

  powerOn() {
    console.log('The computer has booted up.');
  }
}

class PC extends Computer {
  constructor(price, yearBuilt, windowsVersion) {
    super(price, yearBuilt);
    this.windowsVersion = windowsVersion;
  }

  powerOn() {
    console.log(`The computer has booted up Windows ${this.windowsVersion}`);
  }
}

class Mac extends Computer {
  constructor(price, yearBuilt, macVersion) {
    super(price, yearBuilt);
    this.macVersion = macVersion;
  }

  powerOn() {
    console.log(`The computer has booted up Mac ${this.macVersion}`);
  }
}

let computer = new Computer(500, 2015);
let pc = new PC(1000, 2020, 10);
let mac = new Mac(2000, 2020, 'OS X');

computer.powerOn();
pc.powerOn();
mac.powerOn();
