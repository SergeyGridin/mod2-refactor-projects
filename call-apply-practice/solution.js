const message = {
  greeting: 'Hello',
};

const salutation = {
  greeting: 'Hey there',
};

function greetPerson(name) {
  console.log(`${this.greeting} ${name}`);
}

let greeting1 = greetPerson.call(message, 'John');
let greeting2 = greetPerson.call(salutation, 'Michael');

const grades = {
  gradeList: [100, 50, 90, 20, 30],
};

function getAverage(bonus = 0) {
  let sum = 0;
  let graded = 0;
  this.gradeList.forEach((grade) => {
    sum += grade;
    graded++;
  });

  return sum / graded + bonus;
}

let gradesAverage = getAverage.apply(grades);
let gradesWithBonus = getAverage.apply(grades, [20]);
console.log(gradesAverage);
console.log(gradesWithBonus);
