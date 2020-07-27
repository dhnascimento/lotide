// testing tail.js

const tail = require('../tail');

const result1 = [];
const result2 = ["Yo Yo", "Lighthouse", "Labs"];
const result3 = ["Yo Yo", "Lighthouse", "Labs", "Toronto", "Ontario", "Canada"];

console.log(tail(result1));
console.log(tail(result2));
console.log(tail(result3));