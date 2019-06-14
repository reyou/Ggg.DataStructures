let threeSum = function(nums) {
  let results = [];
  if (nums.length < 3) {
    return results;
  }
  // [-1, 0, 1, 2, -1, -4]
  // [-4, -1, -1, 0, 1, 2]
  nums = nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length - 2; index++) {
    if (nums[index] > 0) {
      return results;
    }
    if (index > 0 && nums[index] == nums[index - 1]) {
      continue;
    }
    for (var j = index + 1, k = nums.length - 1; j < k; ) {
      if (nums[index] + nums[j] + nums[k] === 0) {
        results.push([nums[index], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (nums[index] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return results;
};
let input = [-1, 0, 1, 2, -1, -4];
let result = threeSum(input);
console.log(JSON.stringify(result));
