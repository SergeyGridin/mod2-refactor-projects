// chai is an assertion library
const chai = require("chai");
const spies = require("chai-spies");

// assertion style included with chai
const expect = chai.expect;

// tell chai to use spies library
chai.use(spies);

// import the object we're testing
const Dog = require("../problems/dog");

// way to group test, here we are testing Elephant class
describe("Dog class", () => {
  let sammy;

  // runs before each test in a "describe" block
  // creates fresh instance of elephant class for each test
  // ensures result of one test doesnt affect testing of another
  beforeEach("set up dog instance", () => {
    sammy = new Dog("sammy", 5, ["rollover"]);
  });

  // can nest describes for additional grouping
  describe("Dog.prototype.constructor", () => {
    it("should set the name property", () => {
      expect(sammy.name).to.equal("sammy");
      expect(sammy).to.have.property("name");
    });

    // it blocks provide the test case
    it("should set the age property", () => {
      expect(sammy.age).to.equal(5);
      expect(sammy).to.have.property("age");
    });

    it("should set the tricks property", () => {
      // equal checks for deep equality
      // could alternatively use deep.equal
      expect(sammy.tricks).to.eql(["rollover"]);
      expect(sammy).to.have.property("tricks");

      // this would not work because not referentially equal
      // expect(sammy.tricks).to.equal(['rollover'])
    });
  });

  describe("Dog.prototype.haveBirthday", () => {
    it("should increment the dogs age by 1", () => {
      // arrange - define expected value
      let expected = 6;

      // act - invoke the method we're testing and capture new age
      sammy.haveBirthday();
      let actual = sammy.age;

      // assert - check the actual value is what we expected it to be
      expect(actual).to.equal(expected);
    });

    it("should return the new age", () => {
      // arrange - define expected value
      let expected = 6;

      // act - capture return value of function invocation
      let actual = sammy.haveBirthday();

      // assert - check for equality
      expect(actual).to.equal(expected);
    });
  });

  describe("Dog.prototype.numTricks", () => {
    it("should return the number of tricks a dog knows", () => {
      // arrange
      let expected = 1;

      // act
      let actual = sammy.numTricks();

      // assert
      expect(actual).to.equal(expected);
    });
  });

  describe("Dog.prototype.learnTrick", () => {
    it("should add new trick to dogs tricks array", () => {
      // arrange
      let input = "sit";
      let expected = ["rollover", "sit"];

      // act
      sammy.learnTrick(input);
      let actual = sammy.tricks;

      //assert
      expect(actual).to.deep.equal(expected);
    });

    it("should return the new number of tricks a dog knows", () => {
      // arrange
      let input = "lay down";
      let expected = 2;

      // act
      let actual = sammy.learnTrick(input);

      // assert
      expect(actual).to.equal(expected);
    });

    it("should call the numTricks() method", () => {
      // arrange
      let input = "sit";

      // allows us to see if func was called and number of times
      // - first arg is object we're spying on (instance of Dog)
      // - second arg is method we're replacing with our spy
      let numTricksSpy = chai.spy.on(sammy, "numTricks");

      // act
      sammy.learnTrick(input);

      // assert - check number of times our spy was called
      expect(numTricksSpy).to.have.been.called.once;
    });
  });
});
