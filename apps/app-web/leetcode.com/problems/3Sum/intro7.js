let threeSum = function(nums) {
  let results = [];
  if (nums.length < 3) {
    return results;
  }
  // [-1, 0, 1, 2, -1, -4]
  // [-4, -1, -1, 0, 1, 2]
  nums = nums.sort((a, b) => a - b);
  console.log({
    message: "arraySorted",
    nums: JSON.stringify(nums)
  });
  for (let i = 0; i < nums.length - 2; i++) {
    console.log("\n===============\n");
    console.log({
      message: "for loop",
      i,
      "nums.length": nums.length,
      "nums.length - 2": nums.length - 2
    });
    console.log({
      message: "return results?",
      i,
      "nums[i]": nums[i],
      "nums[i] > 0": nums[i] > 0
    });
    if (nums[i] > 0) {
      return results;
    }
    console.log({
      message: "if check continue",
      i,
      "nums[i]": nums[i],
      "nums[i - 1]": nums[i - 1],
      "i > 0": i > 0,
      "nums[i] == nums[i - 1]": nums[i] == nums[i - 1],
      "if result": i > 0 && nums[i] == nums[i - 1]
    });
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (var j = i + 1, k = nums.length - 1; j < k; ) {
      console.log({
        message: "inner for loop",
        i,
        j,
        k: nums.length - 1,
        "j < k": j < k,
        "nums[i] + nums[j] + nums[k]": nums[i] + nums[j] + nums[k]
      });
      console.log({
        "nums[i] + nums[j] + nums[k]": nums[i] + nums[j] + nums[k]
      });
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
