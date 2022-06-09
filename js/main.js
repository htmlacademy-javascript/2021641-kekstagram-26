const randomInteger = function (min, max) {
  Math.floor(Math.random() * max);

  if (min < 0 || max < 0) {
    console.log('Числа должны быть больше нуля!');
  }

  if (min >= max) {
    console.log('Исправьте максимальное значение!');
  }

  return randomInteger;
};

randomInteger();

const maxStringLength = function (testString, maxLength) {
  if (testString <= maxLength) {
    testString = true;
  }

  if (testString > maxLength) {
    maxLength = false;
  }

  return testString;
};

maxStringLength();

