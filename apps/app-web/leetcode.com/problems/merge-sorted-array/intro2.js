/*Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/
// merge nums2 into nums1
var merge = function(nums1, m, nums2, n) {
  // total len of the first array
  let len = m + n;
  // first array indexer
  m--;
  // second array indexer
  n--;
  // continue until we go through with total len counter
  while (len > 0) {
    len--;
    // if n (second array indexer) is less than zero (0)
    // OR
    // if firstArray[firstArrayIndexer] bigger than secondArray[secondArrayIndexer]
    // last element of the second array
    if (n < 0 || nums1[m] > nums2[n]) {
      // shift first indexer element to the last indexer (len)
      nums1[len] = nums1[m];
      // decrement first array indexer
      m--;
    } else {
      // if firstArray[firstArrayIndexer] smaller or equals than secondArray[secondArrayIndexer]
      // then assign that element as last len index element of first array
      nums1[len] = nums2[n];
      // decrement last array indexer
      n--;
    }
  }
  return nums1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
//console.log(merge([2, 0], 1, [1], 1)); // [1,2]
