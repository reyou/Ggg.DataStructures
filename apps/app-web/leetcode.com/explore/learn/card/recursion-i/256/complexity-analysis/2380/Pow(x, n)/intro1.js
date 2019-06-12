/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  x = parseInt(x);
  let isMinus = n < 0;
  let memory = [];
  if (n < 0) {
    n = n * -1;
  }
  let result = resolve(x, n, 1);
  if (isMinus) {
    return 1 / result;
  }
  return result;
};

function resolve(x, n, total) {
  if (n == 0) {
    return total;
  }
  return resolve(x, n - 1, total * x);
}

console.log(myPow(2, 10));
console.log(myPow(1.00001, 1234));
//console.log(myPow(1.00001, 123456));
