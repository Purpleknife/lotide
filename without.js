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
  console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
};


const without = function(source, itemsToRemove) {
  let newSource = []; //To not alter our original array 'source'.

  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newSource.push(item);
    }
  }
  return newSource;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
