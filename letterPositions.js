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


const letterPositions = function(sentence) {
  const results = {};
  let position = []; //The array where we're gonna push our indexes.
  const newStr = sentence.replace(/\s/g, ''); //Remove all spaces.

  for (let i = 0; i < newStr.length; i++) {
    if (results[newStr[i]]) { //If the letter alrealy exists, add the index to it.
      position = results[newStr[i]];
      position.push(i);
    }
    if (!results[newStr[i]]) //If the letter doesn't exist, create it and add the index to it.
      results[newStr[i]] = [i];
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions('LHL'));

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 10]);
assertArraysEqual(letterPositions("LHL'").L, [0, 2]);