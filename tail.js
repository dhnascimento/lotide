const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

const result1 = [];
const result2 = ["Yo Yo", "Lighthouse", "Labs"];
const result3 = ["Yo Yo", "Lighthouse", "Labs", "Toronto", "Ontario", "Canada"];

console.log(tail(result1));
console.log(tail(result2));
console.log(tail(result3));