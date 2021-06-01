/**
 * @param {Array<number>} nums
 * @return {Array<number>}
 */
// 6,2,1,5,4,3,0
const nextPermutation = (nums) => {
  if (nums.length < 2) {
    return nums.reverse();
  }
  // find first decreasing from right
  let decreasePoint = -1;
  let right = nums.length - 1;
  let left = nums.length - 2;
  while (true) {
    if (nums[left] > nums[right]) {
      --right;
      --left;
    } else {
      decreasePoint = left;
      break;
    }
  }

  if (decreasePoint < 0) {
    return nums.reverse();
  }

  // find next bigger on right
  let diff = -1;
  let swapPoint;
  for (let i = decreasePoint + 1; i < nums.length; i++) {
    if (
      diff === -1 ||
      (nums[i] > nums[decreasePoint] && nums[i] - nums[decreasePoint] < diff)
    ) {
      diff = nums[i] - nums[decreasePoint];
      swapPoint = i;
    }
  }

  // swap with next bigger
  let temp = nums[swapPoint];
  nums[swapPoint] = nums[decreasePoint];
  nums[decreasePoint] = temp;

  // sort from N to nums.length - 1
  let rightPart = nums.slice(decreasePoint + 1);
  rightPart = rightPart.sort((a, b) => a - b);
  let counter = 0;
  for (let i = decreasePoint + 1; i < nums.length; i++) {
    nums[i] = rightPart[counter];
    counter++;
  }

  // return result
  return nums;
};

// console.log(nextPermutation([3, 2, 1]));
// console.log(nextPermutation([1, 3, 2]));
console.log(nextPermutation([6, 2, 1, 5, 4, 3, 0]));
