const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//It should scan the object and return the first key for which the callback returns a truthy value.
//If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  const keys = Object.keys(object);

  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const results1 = findKey((object1), x => x.stars === 2);
console.log(results1);

const object2 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 2 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const results2 = findKey((object2), x => x.stars === 2);
console.log(results2);

//Test cases with assertEqual:
assertEqual(results1, 'noma');
assertEqual(results1, 'Blue Hill');
assertEqual(results2, 'Akaleri');