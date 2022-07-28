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

const test1 = countLetters("lighthouse in the house");
const test2 = countLetters('LHL');

assertEqual(test1['l'], 1);
assertEqual(test1['i'], 2);
assertEqual(test1['g'], 1);
assertEqual(test1['h'], 4);
assertEqual(test1['t'], 2);
assertEqual(test1['o'], 2);
assertEqual(test1['u'], 2);
assertEqual(test1['s'], 2);
assertEqual(test1['e'], 3);
assertEqual(test1['n'], 1);

assertEqual(test2['L'], 2);
assertEqual(test2['H'], 1);