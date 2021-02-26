// 1.
function sum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function handleError(error) {}

let res = sum(null);
console.log(res);

// 2.
function sayName(name) {}

try {
} catch (error) {}

// 3.
