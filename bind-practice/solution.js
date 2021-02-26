let person = {
  name: 'John Wick',
  occupation: 'Dog Lover',

  sayName: function () {
    console.log(this.name);
  },

  sayOccupation: function () {
    console.log(this.occupation);
  },
};

let sayNameBound = person.sayName.bind(person);
let sayOccupationBound = person.sayOccupation.bind(person);

setTimeout(sayNameBound, 2000);
setTimeout(sayOccupationBound, 3000);
