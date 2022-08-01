# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @purpleknife/lotide`

**Require it:**

`const _ = require('@purpleknife/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: checks if 2 arrays match or not.
* `assertEqual()`: checks if 2 primitives values are equal.
* `assertObjectsEqual()`: checks if 2 objects are equal.
* `head()`: returns the first element in an array.
* `tail()`: returns every element except the head (first element) of the array.
* `middle()`: returns an array with the middle elements of another array.
* `countLetters()`: counts the number of occurrences of each letter in a string.
* `countOnly()`: takes in an array and an object as arguments, and counts a specific subset of that array and ignoring the rest, depending on what's specified in object.
* `eqArrays()`: to compare 2 arrays.
* `eqObjects()`: to compare 2 objects.
* `findKey()`: takes in an object and a callback function as arguments. It checks the object and returns the first key for which the callback returns a truthy value.
* `findKeyByValue()`: takes in an object and a value function as arguments. It checks the object and returns the first key which contains the given value.
* `flatten()`: description
* `function1(...)`: takes an array of nested arrays and returns a single-level array.
* `letterPositions()`: takes in a string and return an object with the letters and the indices where they were found.
* `map()`: returns an array with the first letter of every string from the input array.
* `takeUntil()`: returns a "slice of the array with elements taken from the beginning.
* `without()`: takes in an array and an another array of items to remove as arguments. It returns a new array where the items to remove were removed.