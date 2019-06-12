/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  let steps = [];
  steps[0] = 1;
  steps[1] = 2;
  let result = resolve(n, steps, 0);
  return result;
};

function resolve(n, steps, taken) {
  if (taken == n) {
    return 1;
  }
  if (taken > n) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < steps.length; i++) {
    result += resolve(n, steps, taken + steps[i]);
  }
  return result;
}

console.log(climbStairs(5));
