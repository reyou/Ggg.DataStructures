/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (k < 1) {
    return -1;
  }
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};
