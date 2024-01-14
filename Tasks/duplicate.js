// Return an array without duplicates

duplicateElement = (element, numberOfDuplicates) => {
  if (numberOfDuplicates <= 0) return [];

  return Array(numberOfDuplicates).fill(element);
};

module.exports = duplicateElement;
