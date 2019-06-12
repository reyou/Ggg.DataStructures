/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  let res = 1;
  for (; n > 0; n = Math.floor(n / 2)) {
    if (n % 2 === 1) {
      res *= x;
    }
    x *= x;
  }
  return res;
};

console.log(myPow(2, 10));
console.log(myPow(2, 11));
console.log(myPow(0.00001, 2147483647));
