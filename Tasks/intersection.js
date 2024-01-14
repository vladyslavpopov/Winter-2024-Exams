// Find an intersection of two dictionaries

'use strict';

intersectionOfObjects = (firstObject, secondObject) => {
  const result = {};
  keys = Object.keys(firstObject);

  for (value of keys) {
    if (firstObject[value] === secondObject[value]) {
      result[value] = firstObject[value];
    }
  }

  return result;
};  

module.exports = intersectionOfObjects;
