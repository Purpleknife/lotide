const assertEqual = function(actual, expected) {

  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
 
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
        return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  let newTail = [];
  if (array.length > 0) {
    return newTail = array.slice(1);
  } else {
    return newTail;
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);


const test = tail(["Apple", "Lighthouse", "Orange"]);
assertEqual(test, ["Apple", "Orange"]);
