const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true if both objects (with nested objects) match", () => {
    const a = { a: { z: 1 }, b: 2 };
    const b = { a: { z: 1 }, b: 2 };
    assert.deepEqual(eqObjects(a, b), true);
  });

  it("returns true if both objects (with nested objects) match", () => {
    const ac = { a: { y: 0, z: 1 }, b: 2 };
    const bc = { a: { y: 0, z: 1 }, b: 2 };
    assert.deepEqual(eqObjects(ac, bc), true);
  });

  it("returns true if both objects match", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("returns true if both objects (with nested arrays) match", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), true);
  });

});