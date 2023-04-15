/* eslint-disable */
export const numberWithCommas = (num) => {
  // Converts numbers into a string with comma delimiters
  // Example: 1234567 to 1,234,567
  if (num === null || num === undefined) {
    return '';
  } else if (typeof num === 'number') {
    return num.toLocaleString();
  } else {
    return parseFloat(num).toLocaleString();
  }
};