/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = resolve(nums, left, right);
  return result;
};

function resolve(nums, left, right) {
  let nums2 = JSON.stringify(nums);
  let min = Math.min(nums[left], nums[right]);
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } else {
      if (nums[mid] < nums[right]) {
        // min is on the left
        right = mid - 1;
      } else {
        // min is on the right
        left = mid + 1;
      }
    }
  }
  return min;
}
let input = [5, 1, 2, 3, 4];
let result = findMin(input);
console.log(result);
