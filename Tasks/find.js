// Find key by value

find = (object, ...rest) => {
  const keys = Object.keys(object);
  
  for (name in object) {
    if (object[name] !== value) {

      return object;
    }
  }

  return undefined;
};

module.exports = find;
