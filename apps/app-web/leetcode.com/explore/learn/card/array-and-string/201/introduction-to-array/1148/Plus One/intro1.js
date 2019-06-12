/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let result = [];
  let carry = 0;
  let add = 1;
  while (digits.length > 0) {
    let val = digits.pop();
    if (val + add + carry > 9) {
      result.unshift(0);
      carry = 1;
    } else {
      result.unshift(val + add + carry);
      carry = 0;
    }
    add = 0;
  }
  if (carry > 0) {
    result.unshift(carry);
  }
  return result;
};
console.log(plusOne([8, 9, 9, 9]));
