/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let isNeg = n < 0;
  if (isNeg) {
    n = -n;
  }
  let memory = [];
  let result = resolve(x, n, memory);
  if (isNeg) return 1 / result;
  return result;
};

function resolve(x, n, memory) {
  if (memory[n]) {
    return memory[n];
  }
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return x;
  }
  let half1 = Math.floor(n / 2);
  let half2 = Math.floor(n / 2) + (n % 2);
  let result = resolve(x, half1, memory) * resolve(x, half2, memory);
  memory[n] = result;
  return result;
}
