var threeSum = function(nums) {
  nums = nums.sort();
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = nums[i];
  }
  nums = [];
  for (let key in hash) {
    nums.push(hash[key]);
  }
  let results = [];
  let builder = [];
  resolve(nums, builder, results);
  return results;
};

function total(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function resolve(nums, builder, results) {
  for (let i = 0; i < nums.length; i++) {
    builder.push(nums[i]);
    if (builder.length === 3) {
      if (total(builder) === 0) {
        results.push(builder.slice(0));
      }      
    }
    let nums2 = nums.slice(i + 1);
    resolve(nums2, builder, results);
    builder.pop();
  }
}
let input = [-1, 0, 1, 2, -1, -4];
console.log(JSON.stringify(threeSum(input)));
