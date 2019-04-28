/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = search2(nums, target, left, right);
  return result;
};

function search2(nums, target, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((right + left) / 2);
  let val = nums[mid];
  if (val == target) {
    return mid;
  }
  if (target < val) {
    // search left
    return search2(nums, target, left, mid - 1);
  } else {
    // search right
    return search2(nums, target, mid + 1, right);
  }
}

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
let result = search(nums, target);
console.log(result);
