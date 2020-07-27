# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dhnascimento/lotide`

**Require it:**

`const _ = require('@dhnascimento/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of an array.
* `tail(array)`: Returns a new array  without the first element of the input array.
* `middle(array)`: Returns a new array with the unsorted median of the input array.
* `assertArrayEqual(array1, array2)`: Compares the first array with the second and returns a message telling if they are equal or not.
* `assertEqual(value1, value2)`: Compares the first variable with the second and returns a message telling if they are equal or not.
* `eqArrays(array1, array2)`: Compares the first array with the second and returns true if they are identical and false otherwise.
* `assertObjectsEqual(object1, object2)`: Compares the first object with the object and returns a message telling if they are equal or not.