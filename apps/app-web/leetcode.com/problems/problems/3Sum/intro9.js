// [-1, 0, 1, 2, -1, -4]
let threeSum = function(nums) {
  let results = [];
  if (nums.length < 3) {
    return results;
  }
  // [-4, -1, -1, 0, 1, 2]
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return results;
    }

    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (var j = i + 1, k = nums.length - 1; j < k; ) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        results.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
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
