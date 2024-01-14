// Generate random integer value in given range

'use strict';

const getRandomInt = (min, max) => {
  max = max || min;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;  
};

module.exports = getRandomInt;
