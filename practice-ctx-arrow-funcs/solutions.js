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

user.printThis(); // prints context correctly, since `printThis` is declared using regular function declaration and called method style.

user.printArrowThis(); // prints an empty object (module) because context is resolved using lexical scope. Differs based on the environment

user.speak(); // prints correct name, since it is regular function that is called method style.

const changeNameFunc = user.createChangeNameFunc(); // Notice that the return value is ANOTHER FUNCTION
console.log(changeNameFunc);

changeNameFunc("Peter");
// since arrow function dont have their own `this` ,
//    lexical scopes is used to resolve the context.
//    Since the enclosing scope is created by the `createChangeNameFunc`, we need to look at the call site to determine context within that function.
//    We called `createChangeNameFunc` on line 38 method style. And since it was declared using regular function declaration,
//    context becomes `user` object.

const changeNameFuncWithLostCtx = user.createChangeNameFuncWithLostCtx(); // returns ANOTHER FUNCTION!
console.log(changeNameFuncWithLostCtx);

changeNameFuncWithLostCtx("Kate");
// throws an error, since `changeNameFuncWithLostCtx` is a regular function.
// Since we are calling it function style, context is going to become global object.
// Global object does not have `speak` method.
