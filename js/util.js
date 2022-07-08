function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// eslint-disable-next-line no-unused-vars
const checkStringLength = (string, maxLength) => string.length <= maxLength;

const creatRandomItem = (arr) => arr[getRandomPositiveInteger(0, arr.length - 1)];

export {getRandomPositiveInteger, creatRandomItem};
