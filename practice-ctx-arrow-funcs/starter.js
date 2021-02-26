// ARROW FUNCTIONS AND CONTEXT

const user = {
  name: "Alex",
  createChangeNameFunc: function () {
    return (newName) => {
      this.name = newName;
      this.speak();
    };
  },

  createChangeNameFuncWithLostCtx: function () {
    return function (newName) {
      this.name = newName;
      this.speak();
    };
  },

  speak: function () {
    console.log(`hi my name is ${this.name}`);
  },

  printArrowThis: () => {
    console.log(this);
  },

  printThis: function () {
    console.log(this);
  },
};

user.printThis();

user.printArrowThis();

user.speak();

const changeNameFunc = user.createChangeNameFunc();
console.log(changeNameFunc);

changeNameFunc("Peter");

const changeNameFuncWithLostCtx = user.createChangeNameFuncWithLostCtx();
console.log(changeNameFuncWithLostCtx);

changeNameFuncWithLostCtx("Kate");
