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

module.exports = middle;