const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(obj, value) {
  const keys = Object.keys(obj); //keys is an array containing the keys in obj.

  for (let key of keys) {
    if (obj[key] === value) { //Return key when a key with value is found.
      return key;
    }
  }
  return undefined; //Return undefined when no key with that given value is found.
};


//Tests:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const bestMoviesByGenre = {
  horror: "The Exorcist",
  comedy: "Project Adam",
  sciFi: "Avengers: Endgame"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestMoviesByGenre, "Project Adam"), "thriller");
assertEqual(findKeyByValue(bestMoviesByGenre, "The Exorcist"), "horror");