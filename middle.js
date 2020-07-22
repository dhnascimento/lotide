// TEST/ASSERTION FUNCTIONS

const assertArrayEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return "🛑🛑🛑 Assertion Failed:the arrays are  NOT identical!";
    }
  } return "✅✅✅ Assertion Passed: the arrays are identical!";
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
  } return true;
};


// console.log(case3[case3.length/2 - 1]);
// console.log(case3[case3.length/2]);
// console.log(case4[(case4.length - 1)/2] );



// ACTUAL FUNCTION
const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    middleArray.push(array[array.length / 2 - 1]);
    middleArray.push(array[array.length / 2]);
    return middleArray;
  } else if (array.length % 2 !== 0) {
    middleArray.push(array[(array.length - 1) / 2]);
    return middleArray;
  }
};

// TEST CODE

console.log(middle([]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, "a", "b", 5, 7, 8]));
console.log(middle([1, 2, 3, "a", "b", 5, 7, 8, 9]));
