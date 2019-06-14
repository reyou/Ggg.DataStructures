// [-1, 0, 1, 2, -1, -4]
let threeSum = function(nums) {
  let results = [];
  if (nums.length < 3) {
    return results;
  }
  // [-4, -1, -1, 0, 1, 2]
  nums = nums.sort((a, b) => a - b);

  for (let left = 0; left < nums.length - 2; left++) {
    if (nums[left] > 0) {
      return results;
    }
    // skip already processed numbers
    if (left > 0 && nums[left] == nums[left - 1]) {
      continue;
    }
    let middle = left + 1;
    let right = nums.length - 1;
    while (middle < right) {
      let total = nums[left] + nums[middle] + nums[right];
      if (total === 0) {
        results.push([nums[left], nums[middle], nums[right]]);
        middle++;
        right--;
        while (middle < right && nums[middle] == nums[middle - 1]) {
          middle++;
        }
        while (middle < right && nums[right] == nums[right + 1]) {
          right--;
        }
      } else if (total > 0) {
        right--;
      } else {
        middle++;
      }
    }
  }
  return results;
};
let input = [-1, 0, 1, 2, -1, -4];
let result = threeSum(input);
console.log(JSON.stringify(result));
