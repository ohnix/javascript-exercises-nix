const leapYears = function (year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;

//if year is divisble by 4 = true &&
//if year is divisible by 400 = true
//else if
//if year divisible by 100 = false
