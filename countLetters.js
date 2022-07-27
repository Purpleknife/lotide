const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let count = {};

  for (const letter of str) {
    if (letter !== ' ') {
      if (count[letter]) {
        count[letter] += 1;
      }
      if (!count[letter]) {
        count[letter] = 1;
      }
    }
  }
  return count;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters('LHL'));

assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
assertEqual(countLetters('LHL'), { L: 2, H: 1 });