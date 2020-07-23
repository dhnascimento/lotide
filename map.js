const myMap = function(array, callback) {
  //  temporary code
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const assertArrayEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return "🛑🛑🛑 Assertion Failed:the arrays are  NOT identical!";
    }
  } return "✅✅✅ Assertion Passed: the arrays are identical!";
};

;

let test = myMap(words ,x => x[0]);
let test2 = [ 'g', 'c', 't', 'm', 't' ];
console.log(assertArrayEqual(test, test2));

let test3 = [ 'g', 'c'];
console.log(assertArrayEqual(test, test3));

let test4 = [];
console.log(assertArrayEqual(test, test4));

let test5 = [ 'g', 'c', 't', 'm', 1];
console.log(assertArrayEqual(test, test5));





