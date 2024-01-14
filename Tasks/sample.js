// Get one random element from an array

const SAMPLE = (arr) => {
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
};

module.exports = SAMPLE;
