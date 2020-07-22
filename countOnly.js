const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item] === true) {
      result[item] = 0;
      }
    }
  for (let j of allItems) {
    if (result[j] >= 0) {
      result[j]++;
    }
    }
    console.log(result);
    return result;
  }
  
  // const countOnly = function(allItems, itemsToCount) {
    // let result = {};
    // for (let item in itemsToCount) {
      // if (itemsToCount[item] === true) {
        // result[item] = 0;
        // }
      // }
    // for (let j of allItems) {
      // if (result[j]) {
        // result[j]++;
      // }
      // }
      // console.log(result);
      // return result;
    // }



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);