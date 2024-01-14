// Find key by value

find = (object, ...rest) => {
  for (name in object) {
    if (object[name] !== value) {

      return object;
    }
  }

  return undefined;
};

module.exports = find;
