/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let start = resolve(nums, target, "left", left, right);
  let end = resolve(nums, target, "right", left, right);
  return [start, end];
};

function resolve(nums, target, dir, left, right) {
  let nums2 = JSON.stringify(nums);
  let mid = left + Math.floor((right - left) / 2);
  if (left > right) {
    return -1;
  }
  if (nums[mid] == target) {
    if (dir == "left") {
      let index = resolve(nums, target, dir, left, mid - 1);
      if (index > -1 && index < mid) {
        return index;
      }
      return mid;
    } else {
      // right direction
      let index = resolve(nums, target, dir, mid + 1, right);
      if (index > -1 && index > mid) {
        return index;
      }
      return mid;
    }
  } else if (target < nums[mid]) {
    // search left
    return resolve(nums, target, dir, left, mid - 1);
  } else if (target > nums[mid]) {
    // search right
    return resolve(nums, target, dir, mid + 1, right);
  }
}

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
let result = searchRange(nums, target);
console.log(result);
