/**
 * @param {number} input
 * @return {boolean}
 */
const powerOfTwo = (input) => {
  if (input === 0) {
    return false;
  }
  if (input === 1) {
    return true;
  }
  while (true) {
    if (input % 2 > 0) {
      return false;
    }

    input = input / 2;

    if (input === 1) {
      return true;
    }
  }
};
