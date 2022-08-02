const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("It should scan the object and return the first key for which the callback {x => x.stars === 2} returns a truthy value", () => {
    const object1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.deepEqual(findKey((object1), x => x.stars === 2), 'noma');
  });

  it("It should scan the object and return the first key for which the callback {x => x.stars === 3} returns a truthy value", () => {
    const object2 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 2 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.deepEqual(findKey((object2), x => x.stars === 3), 'elBulli');
  });

  it("If no key is found, then it should return undefined", () => {
    const object3 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 2 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
    };
    assert.deepEqual(findKey((object3), x => x.stars === 4), undefined);
  });

});