const sumAll = function (min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
