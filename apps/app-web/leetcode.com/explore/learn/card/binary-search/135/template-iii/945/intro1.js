/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let index = resolve(arr, x);
  let leftCounter = 1;
  let rightCounter = 1;
  let result = [];
  while (k > 0) {
    let leftVal = Math.abs(x - arr[index - leftCounter]);
    let rightVal = Math.abs(x - arr[index + rightCounter]);
    if (leftVal < rightVal) {
      result.push(leftVal);
    }
    result.push(item);
    k--;
  }
  return result;
};

let resolve = function(arr, x) {
  // binary search
  let left = 0;
  let right = arr.length - 1;
  let diff = 99999999999;
  let closest = 0;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (Math.abs(arr[mid] - x) <= diff) {
      diff = Math.abs(arr[mid] - x);
      closest = mid;
    }
    if (arr[mid] >= x) {
      // search left
      right = mid - 1;
    } else {
      // search right
      left = mid + 1;
    }
  }
  return closest;
};
let arr = [0, 0, 0, 1, 3, 5, 6, 7, 8, 8];
let k = 2;
let x = 2;
let result = findClosestElements(arr, k, x);
console.log(result);
