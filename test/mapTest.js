const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns the 1st letter from every string in the array: ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("returns the 1st letter from every string in the array: ['A', 'B', 'O', 'L'] for ['Apple', 'Banana', 'Orange', 'Lemon']", () => {
    const words2 = ['Apple', 'Banana', 'Orange', 'Lemon'];
    assert.deepEqual(map(words2, word => word[0]), ['A', 'B', 'O', 'L']);
  });

});