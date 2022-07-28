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


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) { //If object1 doesn't have the same number of keys as object2, don't continue, return false.
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //If it's an array, eqArrays will take care of the comparison.
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) { //If the values of the keys are primitives and don't match, return false.
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; //To fix output object issue.

  if (!eqObjects(actual, expected)) { //Print a msg depending on if eqObjects is true or false.
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
assertObjectsEqual(cd, cd2);

