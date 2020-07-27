// testing middle.js
const middle = require('../middle.js');
const assertArrayEqual = require('../assertArrayEqual');


// TEST CODE
console.log(middle([]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, "a", "b", 5, 7, 8]));
console.log(middle([1, 2, 3, "a", "b", 5, 7, 8, 9]));


console.log(assertArrayEqual(middle([]), []));
console.log(assertArrayEqual(middle([1]), []));
console.log(assertArrayEqual(middle([1, 2]), []));
console.log(assertArrayEqual(middle([1, 2, 3]), [2]));
console.log(assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArrayEqual(middle([1, 2, 3, "a", "b", 5, 7, 8]), ["a", "b"]));
console.log(assertArrayEqual(middle([1, 2, 3, "a", "b", 5, 7, 8, 9]), ["c"]));