const assertArrayEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return "🛑🛑🛑 Assertion Failed:the arrays are  NOT identical!";
    }
  } return "✅✅✅ Assertion Passed: the arrays are identical!";
};

console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArrayEqual([1, 2, 3], [1, 2, "3"]));