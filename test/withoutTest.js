const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns a new array after removing a given value from it: ['hello', 'world'] for ['hello', 'world', 'lighthouse'] after removing ['lighthouse']", () => {
    const words1 = ["hello", "world", "lighthouse"];
    const itemsToRemove1 = ["lighthouse"];
    assert.deepEqual(without(words1, itemsToRemove1), ["hello", "world"]);
  });

  it("returns a new array after removing a given value from it: [1, 2, 3, 5] for [1, 2, 3, 4, 5] after removing [4]", () => {
    const words2 = [1, 2, 3, 4, 5];
    const itemsToRemove2 = [4];
    assert.deepEqual(without(words2, itemsToRemove2), [1, 2, 3, 5]);
  });

});