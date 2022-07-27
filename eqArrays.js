const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);