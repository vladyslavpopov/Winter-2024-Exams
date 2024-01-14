// Get month number

months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

getMonthNumber = (input) => {
  l = Months.length;
  for (let i = 0; i < l; i++) {
    if (input.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
