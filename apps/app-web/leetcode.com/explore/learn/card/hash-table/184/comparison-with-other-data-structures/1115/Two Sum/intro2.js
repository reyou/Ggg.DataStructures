/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let result = nums[i] + nums[j];
      if (result == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([-1, -2, -3, -4, -5], -8));
