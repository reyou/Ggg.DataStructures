/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let result = resolve(nums, S, 0, 0);
  return result;
};

function resolve(nums, target, count, total) {
  if (count === nums.length) {
    if (total === target) {
      // console.log("found!");
      return 1;
    }
    return 0;
  }
  for (let i = count; i < nums.length; i++) {
    let val = nums[i];
    let val2 = val * -1;
    let res1 = resolve(nums, target, count + 1, total + val);
    let res2 = resolve(nums, target, count + 1, total + val2);
    return res1 + res2;
  }
  return 0;
}

// console.log(findTargetSumWays([1, 1], 0));
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
