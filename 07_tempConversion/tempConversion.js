const convertToCelsius = function () {
  let farenheit = 32;
  let oldCelsius = (farenheit - 32) * (5 / 9);
  let celsius = Math.round(oldCelsius * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function () {
  let celsius = 0;
  let oldFarenheit = (celsius * 9) / 5 + 32;
  let farenheit = Math.round(oldFarenheit * 10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
