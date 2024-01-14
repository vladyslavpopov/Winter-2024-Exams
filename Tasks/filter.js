// Filter array by type name

'use strict';

filterArrayByType = (array, type) => {
  filteredArray = array.filter((element) => typeof element === type);
  return filteredArray;
};

module.exports = filterArrayByType;
