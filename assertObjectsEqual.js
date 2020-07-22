// Returns true if both arrays are identical and false otherwise.
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
    return true;
  }
};


// // Returns true if both objects have identical keys with identical values.
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  } else {
    for (let key of Object.keys(actual)) {
      if (Array.isArray(actual[key]) === true && Array.isArray(expected[key]) === true) {
        if (eqArrays(actual[key], expected[key]) === false) {
          return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
        }
      } else {
        if (actual[key] !== expected[key]) {
          return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
        }
      }
    }
  }
  return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false