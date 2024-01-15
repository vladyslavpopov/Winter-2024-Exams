// Reverse an array, you can't use .reverse()

'use strict';

const invertArray = (array) => {
  const reversedArray = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
};

module.exports = invertArray;
