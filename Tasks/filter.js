// Filter array by type name

'use strict';

const filterArrayByType = (array, type) => {
  const filteredArray = array.filter((element) => typeof element === type);
  return filteredArray;
};

module.exports = filterArrayByType;
