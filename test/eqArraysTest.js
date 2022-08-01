//Test codes from eqArray file:

const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


//To check if eqArrays is now recursive (checks nested arrays):
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([[2, 3], 4], [[2, 3], 4])); // => true


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), true); // => false