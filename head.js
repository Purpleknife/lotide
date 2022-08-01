//head returns the 1st element in an array, or undefined is the array is empty.

const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array.length > 0) {
    return array[0];
  }
  return undefined;
};

module.exports = head;