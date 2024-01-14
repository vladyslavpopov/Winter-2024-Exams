// Reverse an array, you can't use .reverse()

invertArray = (array) => {
  const reversedArray = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
};

module.exports = invertArray;
