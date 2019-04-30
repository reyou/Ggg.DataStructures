/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length == 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    // go left
    if (nums[0] <= nums[right]) {
      right = mid - 1;
    }
    // go right
    else {
      left = mid + 1;
    }
  }
  if (right < 0) {
    return nums[left];
  }
  if (left > right) {
    return nums[right];
  }
  return nums[left];
};
console.log(findMin([3, 3, 3, 3, 3, 3, 3, 3, 1, 3]));
