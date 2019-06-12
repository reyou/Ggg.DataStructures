/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = resolve(nums, target, left, right);
  return result;
};

function resolve(nums, target, left, right) {
  // let right lookup with pivot
  if (left > right) {
    return -1;
  }
  let mid = left + Math.floor((right - left) / 2);

  if (nums[mid] == target) return mid;
  if (nums[left] == target) return left;
  if (nums[right] == target) return right;

  if (nums[left] < nums[mid]) {
    // if left side sorted
    if (target > nums[left] && target < nums[mid]) {
      // if item in sorted list
      return resolve(nums, target, left, mid - 1);
    }
    return resolve(nums, target, mid + 1, right);
  }
  if (nums[mid] < nums[right]) {
    // right is sorted
    if (target > nums[mid] && target <= nums[right]) {
      // if item in sorted list
      return resolve(nums, target, mid + 1, right);
    }
    return resolve(nums, target, left, mid - 1);
  }
  return -1;
}

let nums = [3, 1];
let target = 1;
let result = search(nums, target);
console.log(result);
