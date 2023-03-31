const leapYears = function (year) {
  if (year % 4 == 0 && year % 400 == 0) {
    console.log("Yep! Leap year!");
  }
};

console.log(leapYears(1996));

// Do not edit below this line
module.exports = leapYears;

//if year is divisble by 4 = true &&
//if year is divisible by 400 = true
//else if
//if year divisible by 100 = false
