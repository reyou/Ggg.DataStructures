var findMaximumXOR = function(nums) {
  let builder = [];
  let max = resolve(nums, builder, 0);
  return max;
};

function resolve(nums, builder, left) {
  if (builder.length == 2) {
    return builder[0] ^ builder[1];
  }
  let max = 0;
  for (let i = left; i < nums.length; i++) {
    builder.push(nums[i]);
    let result = resolve(nums, builder, left + 1);
    max = Math.max(max, result);
    builder.pop();
  }
  return max;
}

let input = [3, 10, 5, 25, 2, 8];
console.log(findMaximumXOR(input));
