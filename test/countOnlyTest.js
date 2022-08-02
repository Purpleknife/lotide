const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns {Fang: 2, Jason: 1} after looking through ['Karl','Salima','Agouhanna','Fang','Kavith','Jason','Salima','Fang','Joe'], depending on {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false}", () => {
    const arrayToCheck = ['Karl','Salima','Agouhanna','Fang','Kavith','Jason','Salima','Fang','Joe'];
    const itemsToCheck = {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false};
    assert.deepEqual(countOnly(arrayToCheck, itemsToCheck), {Fang: 2, Jason: 1});
  });

  it("returns {a: 3, d: 1} after looking through ['a', 'a', 'b', 'c', 'd', 'e', 'a'], depending on {'a': true, 'd': true, 'b': false, 'f': true}", () => {
    const arrayToCheck2 = ['a', 'a', 'b', 'c', 'd', 'e', 'a'];
    const itemsToCheck2 = {'a': true, 'd': true, 'b': false, 'f': true};
    assert.deepEqual(countOnly(arrayToCheck2, itemsToCheck2), {a: 3, d: 1});
  });
});