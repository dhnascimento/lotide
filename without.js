const assertArraysEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return "🛑🛑🛑 Assertion Failed:the arrays are  NOT identical!";
    }
  } return "✅✅✅ Assertion Passed: the arrays are identical!";
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};


// Working in solution w/ vanilla JS
// const without = function(source, itemsToRemove) {
//   let newArray = [];
//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (newArray[i] === newArray[i-1] && i >1) {
//         continue;
//       } else if (source[i] !== itemsToRemove[j]) {
//         newArray.push(source[i]);
//       } 
//     }
//   } return newArray;
// };


const without = function(source, itemsToRemove) {
  newArray = source.filter(function(f) {
    return !itemsToRemove.includes(f)
  });
  return newArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
