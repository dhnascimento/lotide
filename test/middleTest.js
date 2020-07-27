// testing middle.js
const middle = require('../middle.js');
const assertArrayEqual = require('../assertArrayEqual');
const assert = require('chai').assert


// TEST CODE
describe('#middle', () => {
  it('should return [] for []', () => {
    assert.deepEqual(middle([]), []);
  });

  it('should return [] for [1]', () => {
    assert.deepEqual(middle([1]),[]);
  });

  it('should return [] for [1,2]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return ["a", "b"] for [1, 2, 3, "a", "b", 5, 7, 8]', () => {
    assert.deepEqual(middle([1, 2, 3, "a", "b", 5, 7, 8]), ["a", "b"]);
  });

  it('should return ["b"] for [1, 2, 3, "a", "b", 5, 7, 8, 9]', () => {
    assert.deepEqual(middle([1, 2, 3, "a", "b", 5, 7, 8, 9]), ["b"]);
  });

});