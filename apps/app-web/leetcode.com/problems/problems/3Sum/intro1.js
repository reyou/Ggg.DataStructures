/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let results = {};
  resolve(nums, [], results);
  let resultArr = [];
  for (let key in results) {
    resultArr.push(results[key]);
  }
  return resultArr;
};

function resolve(nums, buffer, results) {
  if (buffer.length === 3) {
    let sum = null;
    buffer = buffer.sort();
    let key = "";
    for (let i = 0; i < buffer.length; i++) {
      sum += buffer[i];
      key += buffer[i].toString();
    }
    if (sum === 0) {
      results[key] = buffer.slice(0);
    }
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    buffer.push(nums[i]);
    resolve(nums, buffer, results);
    buffer.pop();
  }
  return results;
}
console.log(JSON.stringify(threeSum([1, -1, -1, 0])));
// console.log(JSON.stringify(threeSum([-1, 1, 0])));
// console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));
