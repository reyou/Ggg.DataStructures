/*Input:  [1,2,3,4]
Output: [24,12,8,6] */
/*Note: Please solve it without division and in O(n). */
/*Could you solve it with constant space complexity? 
(The output array does not count as extra space for the 
    purpose of space complexity analysis.) */
var productExceptSelf = function(nums) {
  let leftProducts = [];
  leftProducts[0] = 1;
  let rightProducts = [];
  rightProducts[nums.length - 1] = 1;
  let result = [];
  for (let i = 1; i <= nums.length; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }
  return result;
};
let input = [1, 2, 3, 4];
let output = productExceptSelf(input);
console.log(JSON.stringify(output));
