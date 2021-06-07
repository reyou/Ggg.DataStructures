/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  if (s.length === 1) {
    return true;
  }
  let chars = s.split('');
  let left = 0;
  let right = chars.length - 1;
  while (left < right) {
    let leftChar = chars[left].toLocaleLowerCase();
    let rightChar = chars[right].toLocaleLowerCase();
    if ((leftChar >= 'a' && leftChar <= 'z') === false) {
      left++;
    } else if ((rightChar >= 'a' && rightChar <= 'z') === false) {
      right--;
    } else {
      if (leftChar != rightChar) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
};

console.log(validPalindrome('Race Car'));
