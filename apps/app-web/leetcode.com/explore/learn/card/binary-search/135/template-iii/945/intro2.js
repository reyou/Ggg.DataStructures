/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  // approach: use binary search to find the start which is closest to x

  let left = 0;
  let right = arr.length - k;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let midDiff = x - arr[mid];
    let rightDiff = arr[mid + k] - x;
    if (rightDiff < midDiff) {
      // mid + k is closer to x, discard mid by assigning left = mid + 1
      left = mid + 1;
    } else {
      // mid is equal or closer to x than mid + k, remains mid as candidate
      right = mid;
    }
  }
  // left == right, which makes both left and left + k have same diff with x
  console.log(`left: ${left} right: ${right}`);
  return arr.slice(left, left + k);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 5));
// console.log(findClosestElements([1, 2, 3, 4, 5, 6, 8, 9], 4, 7));
// console.log(findClosestElements([1, 2, 3, 4, 5, 6, 7, 8], 4, 7));
// console.log(findClosestElements([0, 0, 0, 1, 3, 5, 6, 7, 8, 8], 2, 2));
// console.log(findClosestElements([2, 3, 3, 4, 4, 4, 4, 5], 2, 4));
