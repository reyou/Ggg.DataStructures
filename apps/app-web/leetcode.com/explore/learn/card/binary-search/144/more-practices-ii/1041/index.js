/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  let sorted = nums.sort((a, b) => a - b);
  let min = 99999999;
  let midDiff = 99999999;
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      let diff = Math.abs(sorted[i] - sorted[j]);
      let targetDiff = Math.abs(k - diff);
      if (targetDiff == 0) {
        return diff;
      } else if (targetDiff < min) {
        min = targetDiff;
        midDiff = diff;
      } else {
        continue;
      }
    }
  }
  return midDiff;
};
let nums = [62, 100, 4];
let k = 2;
console.log(smallestDistancePair(nums, k));
