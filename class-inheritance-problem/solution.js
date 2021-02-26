class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.first} ${this.last}, and I'm ${this.age} years old.`
    );
  }

  static introducePeople(people) {
    if (!Array.isArray(people))
      throw new Error('introducePeople only takes an array as an argument.');

    people.forEach((person) => {
      if (!(person instanceof Person))
        throw new Error('All items in array must be Person class instances.');
      person.introduce();
    });
  }
}

class Student extends Person {
  constructor(first, last, age, major, GPA) {
    super(first, last, age);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      console.log(`${student1.first} ${student1.last} has the higher GPA.`);
    } else if (student2.GPA > student1.GPA) {
      console.log(`${student2.first} ${student2.last} has the higher GPA.`);
    } else {
      console.log('Both students have the same GPA');
    }
  }
}

// let person1 = new Person('Michael', 'Shuff', 33);
// let person2 = new Person('Michael', 'Jordan', 58);
// person1.introduce();
// Person.introducePeople([person1, person2]);

// let student1 = new Student('Sergey', 'Gridin', '24', 'Mathematics', '3.9');
// let student2 = new Student('Michael', 'Shuff', '33', 'Music', '3.5');
// student1.introduce();
// Student.compareGPA(student1, student2);
// Student.compareGPA(student1, student1);
