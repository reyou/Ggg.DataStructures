var firstMissingPositive = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = nums[i];
  }
  let min = 1;
  while (true) {
    if (hash[min] === undefined) {
      return min;
    }
    min++;
  }
};
