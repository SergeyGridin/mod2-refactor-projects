// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (e) {
    handleError(e);
  }
  return sum;
}

function handleError(error) {
  console.log("something happened: ", error.message);
}

let res = sum(null);
console.log(res);

// 2.

function sayName(name) {
  if (!(typeof name === "string")) {
    throw new TypeError("Invalid name! Must be a string!");
  }

  console.log(name);
}

try {
  // sayName("Alex");
  sayName(1);
} catch (error) {
  console.log("Oops, something went wrong: ", error.message);
}

// 3.

class ValidationError extends Error {}

throw new ValidationError("Password fields must match!");
