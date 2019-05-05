var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let x = nums1.length;
  let y = nums2.length;

  let low = 0;
  let high = x;
  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    let maxLeftX = partitionX == 0 ? -999999 : nums1[partitionX - 1];
    let minRightX = partitionX == x ? 999999 : nums1[partitionX];

    let maxLeftY = partitionY == 0 ? -999999 : nums2[partitionY - 1];
    let minRightY = partitionY == y ? 999999 : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 == 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      // move left
      high = partitionX - 1;
    } else {
      // move right
      low = partitionX + 1;
    }
  }
};
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
