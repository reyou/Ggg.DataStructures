/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let left = 0;
  let right = 1;
  if (nums.length < 2) return;
  while (right < nums.length) {
    if (nums[right] != 0) {
      while (nums[left] != 0 && left < right) {
        left++;
      }
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }
    right++;
  }
};
