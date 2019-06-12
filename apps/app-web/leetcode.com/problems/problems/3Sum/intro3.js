/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let hash = {};
  let builder = [];
  let results = [];
  resolve(nums, hash, builder);
  for (let key in hash) {
    results.push(hash[key]);
  }
  return results;
};

function tryAddToResults(builder, results) {
  let sum = null;
  let key = "";
  let builder2 = builder.slice(0).sort();
  for (let i = 0; i < builder.length; i++) {
    sum += builder2[i];
    key += builder2[i].toString();
  }
  if (sum == 0) {
    results[key] = builder.slice(0);
  }
}
function resolve(nums, hash, builder) {
  if (builder.length === 3) {
    tryAddToResults(builder, hash);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    builder.push(nums[i]);
    let nums2 = nums.slice(i + 1);
    resolve(nums2, hash, builder);
    builder.pop();
  }
}

console.log(JSON.stringify(threeSum([1, -1, -1, 0])));
// console.log(JSON.stringify(threeSum([1, -1, -1, 0])));
// console.log(JSON.stringify(threeSum([-1, 1, 0])));
// console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));
