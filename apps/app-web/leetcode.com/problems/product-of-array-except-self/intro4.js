/*Input:  [1,2,3,4]
Output: [24,12,8,6] */
/*Note: Please solve it without division and in O(n). */
/*Could you solve it with constant space complexity? 
(The output array does not count as extra space for the 
    purpose of space complexity analysis.) */
var productExceptSelf = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = 1;
  }
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = result[i] * prod;
    prod = prod * nums[i];
  }
  prod = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * prod;
    prod = prod * nums[i];
  }
  return result;
};
let input = [1, 2, 3, 4];
let output = productExceptSelf(input);
console.log(JSON.stringify(output));
