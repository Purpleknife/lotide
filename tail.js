const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } 
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newTail = [];
  if (array.length > 0) {
    return newTail = array.slice(1);
  }
  return newTail;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
const expected = ["Lighthouse", "Labs"];
assertEqual(result.length, expected.length);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
