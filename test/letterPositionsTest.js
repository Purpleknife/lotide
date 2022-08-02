const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] } for 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions('lighthouse in the house'), { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] });
  });

  it("returns {L: [0, 2], H: [1]} for 'LHL'", () => {
    assert.deepEqual(letterPositions('LHL'), { L: [ 0, 2 ], H: [ 1 ] });
  });
});