var pivotIndex = function(nums) {
  if (nums.length < 2) {
    return -1;
  }
  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      // left counter
      leftSum += nums[j];
    }
    for (let k = i + 1; k < nums.length; k++) {
      // right counter
      rightSum += nums[k];
    }
    if (leftSum == rightSum) {
      return i;
    }
  }
  return -1;
};
console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
