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
    if (arr1[i] !== arr2[i] && (!Array.isArray(arr1[i]) || !Array.isArray(arr2[i]))) {
      return false;
    }
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) { // Added this condition (recursion) to handle nested arrays.
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } 
  }
  return true; //If length and all the elements are a perfect match, return true.
};


//To check if eqArrays is now recursive:
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([[2, 3], 4], [[2, 3], 4])); // => true


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), true); // => false