const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(items, value) {
  for (item of Object.keys(items)) {
    // console.log(item);
    if (items[item] === value) {
      return item;
    }
  }

}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestAlbumByDecade = { 
  eighties: "Disintegration",
  nineties: "OK Computer",
  twothousands:  "Illnois"
};

assertEqual(findKeyByValue(bestAlbumByDecade, "Illnois") , "eighties");
assertEqual(findKeyByValue(bestAlbumByDecade, "Nevermind"), "nineties");
assertEqual(findKeyByValue(bestAlbumByDecade, "Disintegration"), "eighties");