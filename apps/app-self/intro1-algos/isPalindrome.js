/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  // find how many digits in it
  let numberOfDigits = Math.ceil(Math.log10(x));
  let leftDivider = Math.pow(10, numberOfDigits - 1);
  let rightDivider = 10;

  // 12321
  let counter = 0;
  while (true) {
    if (counter > Math.floor(numberOfDigits / 2)) {
      return true;
    }

    let leftResult = Math.floor(x / leftDivider);
    let rightResult = Math.floor(x % rightDivider);

    if (leftResult !== rightResult) {
      return false;
    }
    x = x - leftDivider * leftResult - rightResult;
    x = x / rightDivider;
    leftDivider = leftDivider / 100;

    counter++;
  }
};

console.log(isPalindrome(12321));
