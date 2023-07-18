const getRandomInt = (a, b) => {
  if (a >= 0 && b >= 0) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const result = Math.floor(Math.random() * (max - min)) + min;
    return result;
  }
  return NaN;
};

const getRandomElement = (array) => array[getRandomInt(0, array.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const checkRepeats = (array) => {
  const arrayNoRepeats = new Set(array);
  return arrayNoRepeats.size === array.length;
};

export {getRandomElement, isEscapeKey, checkRepeats};
