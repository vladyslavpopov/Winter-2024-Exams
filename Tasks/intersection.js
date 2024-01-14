// Find an intersection of two dictionaries

intersection = function intersection(object_1, object_2) {
  const result = {};
  first_keys = Object.keys(object_1);

  for (attribute_name of first_keys) {
    if (object_1[attribute_name] === object_2[attribute_name]) {
      object_2[attribute_name] = object_1[attribute_name];
    }
  }

  return result;
};  

module.exports = intersection;
