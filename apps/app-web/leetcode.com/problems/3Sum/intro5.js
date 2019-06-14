/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let results = {};
  let builder = [];
  resolve(nums, builder, results);
  let resultArr = [];
  for (key in results) {
    let result = [];
    let item = results[key];
    for (let i = 0; i < item.length; i++) {
      result.push(item[i].val);
    }
    resultArr.push(result);
  }
  return resultArr;
};
function total(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    sum += item.val;
  }
  return sum;
}
function getHash(arr) {
  let hash = "";
  arr.sort((a, b) => a.val - b.val);
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    hash += item.val + "";
  }
  return hash;
}
function resolve(nums, builder, results) {
  for (let i = 0; i < nums.length; i++) {
    builder.push({
      index: i,
      val: nums[i]
    });
    if (builder.length === 3) {
      if (total(builder) === 0) {
        results[getHash(builder)] = builder.slice(0);
      }
    } else {
      let nums2 = nums.slice(i + 1);
      resolve(nums2, builder, results);
    }
    builder.pop();
  }
}
let input = [-1, 0, 1, 2, -1, -4];
let result = threeSum(input);
console.log(JSON.stringify(result));
