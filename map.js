const eqArrays = function(arr1, arr2) { //Compare both arrays and if they're a perfect match, return true.
  if (arr1.length !== arr2.length) { //Compare length first, if it doesn't match, exit function and return false.
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { //Compare each element one by one if length matches.
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true; //If length and all the elements are a perfect match, return true.
};


const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) { //Print a msg depending on if eqArrays is true or false.
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

// Return the first letter from every string in the array.
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const test1 = [ 'g', 'c', 't', 'm', 't' ];
assertArraysEqual(results1, test1);

const test2 = [ 'c', 't', 'o', 't' ];
assertArraysEqual(results1, test2);