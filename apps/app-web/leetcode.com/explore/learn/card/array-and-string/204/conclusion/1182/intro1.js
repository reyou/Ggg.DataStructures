/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let last = nums[nums.length - 1];
  let turn = k % nums.length;
  while (turn > 0) {
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = last;
    turn--;
    last = nums[nums.length - 1];
  }
  return nums;
};
