// Find an intersection of two dictionaries

'use strict';

const intersectionOfObjects = (firstObject, secondObject) => {
  const result = {};
  const keys = Object.keys(firstObject);

  for (const value of keys) {
    if (firstObject[value] === secondObject[value]) {
      result[value] = firstObject[value];
    }
  }

  return result;
};  

module.exports = intersectionOfObjects;
