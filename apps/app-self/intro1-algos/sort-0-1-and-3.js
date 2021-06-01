const sortArray_0_1_2 = (nums) => {
  let left = 0;
  let middle = 0;
  let right = nums.length - 1;
  while (middle <= right) {
    if (nums[middle] === 0) {
      swap(nums, left, middle);
      left++;
      middle++;
    } else if (nums[middle] === 1) {
      middle++;
    } else if (nums[middle] === 2) {
      swap(nums, middle, right);
      right--;
    }
  }
  return nums;
};

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

console.log(sortArray_0_1_2([0, 1, 2, 1, 2, 2, 2, 1, 0]));
