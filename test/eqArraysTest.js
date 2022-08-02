const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true if both arrays (with nested arrays) match", () => {
    const a = [[2, 3], [4]];
    const b = [[2, 3], [4]];
    assert.deepEqual(eqArrays(a, b), true);
  });

  it("returns true if both arrays (with nested arrays) match", () => {
    const ac = [[2, 3], [4, 5]];
    const bc = [[2, 3], [4, 5]];
    assert.deepEqual(eqArrays(ac, bc), true);
  });

  it("returns true if both arrays match", () => {
    const ab = ["1", "2", "3"];
    const ba = ["1", "2", "3"];
    assert.deepEqual(eqArrays(ab, ba), true);
  });

});