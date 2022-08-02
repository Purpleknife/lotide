const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns the key 'drama' whose value matches the given input: 'The Wire'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it("returns undefined when no key with the given value is found", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };    
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns the key 'horror' whose value matches the given input: 'The Exorcist'", () => {
    const bestMoviesByGenre = {
      horror: "The Exorcist",
      comedy: "Project Adam",
      sciFi: "Avengers: Endgame"
    };  
    assert.deepEqual(findKeyByValue(bestMoviesByGenre, "The Exorcist"), 'horror');
  });
});