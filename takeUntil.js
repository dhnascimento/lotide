const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item) === false) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
}

const assertArrayEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return "🛑🛑🛑 Assertion Failed:the arrays are  NOT identical!";
    }
  } return "✅✅✅ Assertion Passed: the arrays are identical!";
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArrayEqual(results1, [ 1, 2, 5, 7, 3 ]));
console.log(assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]));

console.log(assertArrayEqual(results2, [ "I've", "been", "to", "Hollywood" ]));
console.log(assertArrayEqual(results2, [ "I've", "been", "to", "Holly" ]));