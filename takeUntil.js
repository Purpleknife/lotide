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



//Return a "slice of the array with elements taken from the beginning."
const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if (!callback(element)) {
      results.push(element);
    }
    if (callback(element)) {
      return results;
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// Test cases with assertArraysEqual:
const test1 = [1, 2, 5, 7, 2];
assertArraysEqual(results1, test1);

const test2 = ["I've", 'been', 'to', 'Hollywood'];
assertArraysEqual(results2, test2);

const test3 = [1, 2, 5, 7, 2, -1];
assertArraysEqual(results1, test3);