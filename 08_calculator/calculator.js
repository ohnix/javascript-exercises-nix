const add = function (a, b) {
  // let x = a + b;
  // console.log(x);
  // return x;
  return a + b;
};

const subtract = function (a, b) {
  // let x = a - b;
  // console.log(x);
  // return x;
  return a - b;
};

const sum = function (array) {
  let result = array.reduce(
    (firstValue, lastValue) => firstValue + lastValue,
    0,
  );
  return result;
};

const multiply = function (array) {
  let result = array.reduce((firstValue, lastValue) => firstValue * lastValue);
  return result;
};

const power = function (a, b) {
  let result = Math.pow(a, b);
  return result;
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1; // Factorial of 0 and 1 is 1
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
