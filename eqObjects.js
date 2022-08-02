// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqArrays = require('./eqArrays');

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
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') { //Added this line (recursion) to handle nested objects.
      return eqObjects(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) { //If the values of the keys are primitives and don't match, return false.
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;