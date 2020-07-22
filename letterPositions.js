const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArrayEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return "🛑🛑🛑 Assertion Failed:the arrays are  NOT identical!";
    }
  } return "✅✅✅ Assertion Passed: the arrays are identical!";
};


const letterPositions = function(sentence) {
  let newString = sentence.toLowerCase();
  let listOfLetters = {};
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] !== " ") {
      if (!listOfLetters[newString[i]]) {
        listOfLetters[newString[i]] = [];
        listOfLetters[newString[i]].push(i);
      } 
      else {
        listOfLetters[newString[i]].push(i);
      }
    }
  }
  return listOfLetters;
};

console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("lighthouse in the house DaS Gasfdas ADtojks LLLl"));

console.log(assertArrayEqual(letterPositions("hello").e, [1]));
console.log(assertArrayEqual(letterPositions("lighthouse in the house").h, [ 3, 5, 15, 18 ]));
console.log(assertArrayEqual(letterPositions("hello").o, [2]));