// testing tail.js
const tail = require('../tail');

const assert = require('chai').assert;

describe("#tails", () => {

  it('should return undefined for []',  () => {
    assert.deepEqual(tail([]), []);
  });

  it ('should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it ('should return ["Lighthouse", "Labs", "Toronto", "Ontario"] for ["Yo Yo", "Lighthouse", "Labs", "Toronto", "Ontario", "Canada]', () =>  {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs", "Toronto", "Ontario", "Canada"]),["Lighthouse", "Labs", "Toronto", "Ontario", "Canada"]);
  });
});



// const result3 = ["Yo Yo", "Lighthouse", "Labs", "Toronto", "Ontario", "Canada"];

// console.log(tail(result1));
// console.log(tail(result2));
// console.log(tail(result3));