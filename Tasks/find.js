// Find key by value

'use strict';

const findKey = (object, value) => {
  const keys = Object.keys(object);

  for (const index of keys) {
    if (object[index] === value) {
      return index;
    }
  }

  return undefined;
};

module.exports = findKey;
