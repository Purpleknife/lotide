//Test codes from tail file:

const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
const expected = ["Lighthouse", "Labs"];
assertEqual(result.length, expected.length);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");