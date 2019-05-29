var twoSum = function(nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap[complement] != undefined) {
      return [hashMap[complement], i];
    }
    hashMap[nums[i]] = i;
  }
};

//console.log(twoSum([-1, -2, -3, -4, -5], -8));
console.log(twoSum([2, 7, 11, 15], 9));
