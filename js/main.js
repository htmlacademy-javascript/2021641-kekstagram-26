const randomInteger = function (min, max) {
  Math.floor(Math.random() * max);
  const number = 0;

  if (min < 0 || max < 0) {
    return -1;
  }

  if (min >= max) {
    return -1;
  }

  return number;
};

randomInteger();

const isNormalString = function (testString, maxLength) {
  return testString.length > maxLength;
};

isNormalString();

