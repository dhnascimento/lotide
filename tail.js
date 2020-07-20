// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let new_array = array.slice(1); 
  return new_array;
};

const result1 = [];
const result2 = ["Yo Yo", "Lighthouse", "Labs"];
const result3 = ["Yo Yo", "Lighthouse", "Labs", "Toronto", "Ontario", "Canada"];


console.log(tail(result1));
console.log(tail(result2));
console.log(tail(result3));