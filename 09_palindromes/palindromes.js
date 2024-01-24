const palindromes = function (string) {
  let processedString = string.split("").reverse().join("").toLowerCase();
  return processedString === string;
};

// Do not edit below this line
module.exports = palindromes;
