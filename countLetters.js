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

module.exports = countLetters;