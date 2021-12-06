// function stringLength(string) {
//     if(string.length < 1 && string.length > 10) {
//       throw new Error ('String must be between 1 and 10 characters long');
//     }
//     return string.length;
//   }

const { add } = require("lodash");

// function reverseString(string) {
//   return string.split('').reverse().join('');
// }

// const calculator = {
//   multiply (a, b) {
//     return a * b;
//   },
//   add(a,b) {
//     return a + b;
//   },
//   subtract(a,b) {
//     return a - b;
//   },
//   divide(a,b) {
//     return a / b;
//   }
// }

const capitalize = (string) => {
  let firstLetter = string.slice(0,1).toUpperCase();
  let rest = string.slice(1);
  return firstLetter.concat(rest);
}

  module.exports = capitalize;