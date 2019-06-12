/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  let count = 0;
  for (let startIndex = 0; count < nums.length; startIndex++) {
    let currentIndex = startIndex;
    let prevValue = nums[startIndex];
    do {
      let nextIndex = (currentIndex + k) % nums.length;
      let temp = nums[nextIndex];
      nums[nextIndex] = prevValue;
      prevValue = temp;
      currentIndex = nextIndex;
      count++;
    } while (currentIndex != startIndex);
  }
  return nums;
};
console.log(rotate([1, 2, 3, 4, 5, 6], 2));
