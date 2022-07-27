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


const middle = function (arr) {
  let newArr = [];
  let lgth = arr.length;
  const midIdx = lgth / 2;

  if (lgth > 2) {
    for (let i = 0; i < lgth; i++) {
      if (lgth % 2 !== 0) { //If lgth is an odd number.
        return [(arr[Math.floor(midIdx)])];
      }
      if (lgth % 2 === 0) { //If lgth is an even number.
        return [arr[Math.floor(midIdx) - 1], arr[Math.floor(midIdx)]];
      }
    }
  }
  return newArr; //Return empty array if lgth < 2.
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);