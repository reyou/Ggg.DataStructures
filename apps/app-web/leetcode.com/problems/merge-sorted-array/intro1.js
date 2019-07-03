/*Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/
// merge nums2 into nums1
var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    let index = binarySearch(nums1, m, nums2[i]);
    if (nums1[index] === 0) {
      nums1[index] = nums2[i];
    } else {
      shiftInsert(nums1, index, nums2[i]);
    }
    m++;
  }
  return nums1;
};

function shiftInsert(arr, index, item) {
  for (let i = arr.length - 2; i >= index; i--) {
    arr[i + 1] = arr[i];
  }
  arr[index + 1] = item;
}

function binarySearch(arr, len, item) {
  let left = 0;
  let right = len - 1;
  // []
  // [1]
  // [1,5]
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === item) {
      return mid;
    }
    if (item < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([2, 0], 1, [1], 1)); // [1,2]
