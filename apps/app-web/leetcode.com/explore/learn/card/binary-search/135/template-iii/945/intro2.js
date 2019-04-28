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
    let mid = left + Math.min((right - left) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      // mid + k is closer to x, discard mid by assigning left = mid + 1
      left = mid + 1;
    } else {
      // mid is equal or closer to x than mid + k, remains mid as candidate
      right = mid;
    }
  }
  // left == right, which makes both left and left + k have same diff with x
  return arr.slice(left, left + k);
};
let arr = [0, 0, 0, 1, 3, 5, 6, 7, 8, 8];
let k = 2;
let x = 2;
let result = findClosestElements(arr, k, x);
console.log(result);
