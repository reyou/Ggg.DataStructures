const sortArray_0_1_2 = (nums) => {
  let stats = {};
  stats[0] = 0;
  stats[1] = 0;
  stats[2] = 0;
  // find how many items for each element
  for (let i = 0; i < nums.length; i++) {
    stats[nums[i]] += 1;
  }
  for (let i = 0; i < stats[0]; i++) {
    nums[i] = 0;
  }
  for (let i = 0; i < stats[1]; i++) {
    nums[stats[0] + i] = 1;
  }
  for (let i = 0; i < stats[2]; i++) {
    nums[stats[0] + stats[1] + i] = 2;
  }
  return nums;
};

console.log(sortArray_0_1_2([0, 1, 2, 1, 2, 2, 2, 1, 0]));
