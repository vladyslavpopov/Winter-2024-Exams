// Find key by value

find = (object, value) => {
  const keys = Object.keys(object);

  for (index of keys) {
    if (object[index] === value) {
      return index;
    }
  }

  return undefined;
};

module.exports = find;
