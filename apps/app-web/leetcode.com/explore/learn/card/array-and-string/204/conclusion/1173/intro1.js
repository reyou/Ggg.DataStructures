/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Given nums = [0,0,1,1,1,2,2,3,3,4],
[0,0,0,1,1,1,2,2,3,3,4]
[1,2,3,4,5,6]

Your function should return length = 5, with the first five 
elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
*/
var removeDuplicates = function(nums) {
  let left = 0;

  while (left < nums.length - 1) {
    if (nums[left] == nums[left + 1]) {
      let counter = left + 1;
      while (nums[left] == nums[counter] && counter < nums.length - 1) {
        counter++;
      }
      for (let i = left + 1; i <= counter; i++) {
        nums[i] = nums[counter];
      }
    }
    left++;
  }
  let count = 1;
  let index = 0;
  while (index + 1 < nums.length) {
    if (nums[index] == nums[index + 1]) break;
    count++;
    index++;
  }
  return count;
};
console.log(removeDuplicates([1, 2, 3]));
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
