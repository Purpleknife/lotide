const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns {Fang: 2, Jason: 1} after looking through ['Karl','Salima','Agouhanna','Fang','Kavith','Jason','Salima','Fang','Joe'], depending on {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false}", () => {
    assert.deepEqual(countOnly(['Karl','Salima','Agouhanna','Fang','Kavith','Jason','Salima','Fang','Joe'], {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}), {Fang: 2, Jason: 1});
  });

  it("returns {a: 3, d: 1} after looking through ['a', 'a', 'b', 'c', 'd', 'e', 'a'], depending on {'a': true, 'd': true, 'b': false, 'f': true}", () => {
    assert.deepEqual(countOnly(['a', 'a', 'b', 'c', 'd', 'e', 'a'], {'a': true, 'd': true, 'b': false, 'f': true}), {a: 3, d: 1});
  });
});