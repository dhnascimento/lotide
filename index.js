
// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArrayEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertObjectsEqual: assertObjectsEqual
};