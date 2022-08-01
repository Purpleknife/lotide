//Test code from head file:

const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head([5,6,7]), 7);
assertEqual(head(['Apple', 'Orange']), 'Banana');