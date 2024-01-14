// Sum all numbers from an array

const sum = (arrayOfNumbers = () => {}) => {
  let result = 0;

  for (const value of arrayOfNumbers) {
    if (typeof value === 'number') {
      result += value;
    }
  }
  
  return result;
};

module.exports = sum;
