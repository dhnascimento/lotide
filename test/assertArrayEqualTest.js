// testing assertArrayEqual
const assertArrayEqual = require('../assertArrayEqual')

console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArrayEqual([1, 2, 3], [1, 2, "3"]));
console.log(assertArrayEqual([1, 2, 3], [1, 2, 3, 4]));
console.log(assertArrayEqual([1, 2, 3], [1, 2]));
console.log(assertArrayEqual([], []));