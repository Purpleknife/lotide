const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect; //To fix output object issue.

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
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

const test1 = { 
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1
};
const test2 = { 
  'L': '2',
  'H': '1'
};
assertEqual(countLetters("lighthouse in the house"), test1);
assertEqual(countLetters('LHL'), test2);