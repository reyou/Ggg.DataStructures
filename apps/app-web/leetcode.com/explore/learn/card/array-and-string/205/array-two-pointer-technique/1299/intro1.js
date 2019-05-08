/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let left = 0;
  let right = 0;
  let total = 0;
  let max = 9999999;
  while (right < nums.length) {
    total = total + nums[right];
    if (total >= s) {
      while (total >= s) {
        if (right - left + 1 < max) {
          max = right - left + 1;
        }
        total = total - nums[left];
        left++;
      }
    }
    right++;
  }
  if (max == 9999999) return 0;
  return max;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
