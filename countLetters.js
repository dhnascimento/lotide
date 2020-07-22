const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let newString = string.toLowerCase();
  let listOfLetters = {};
  for (let letter of newString) {
    if (letter !== " ") {
      if (!listOfLetters[letter]) {
        listOfLetters[letter] = 1;
      } 
      else {
        listOfLetters[letter]++;
      }
    }
  }
  return listOfLetters;
};

console.log(countLetters('LHL'));
console.log(countLetters('DAod as jd poa sjpA SDoa skdg'));
console.log(countLetters("lighthouse in the house"));