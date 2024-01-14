// Find key by value

find = (object, ...rest) => {
  const keys = Object.keys(object);

  for (name of object) {
    if (object[name] === value) {
      return index;
    }
  }

  return undefined;
};

module.exports = find;
