/*
Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
 */
var reverse = function(x) {
  let isNegative = x < 0;
  if (isNegative) {
    x = x * -1;
  }
  let sum = 0;
  while (x > 0) {
    sum = sum * 10 + (x % 10);
    if (Math.floor(sum / 10) >= 214748365) {
      return 0;
    }
    x = Math.floor(x / 10);
  }

  if (isNegative) {
    sum = sum * -1;
  }
  return sum;
};
let output = reverse(1534236469);
console.log(output);
