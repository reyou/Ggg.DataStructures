/**
 * initialize your data structure here.
 */

var MedianFinder = function() {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  let index = this.binarySearch(num);
  this.arr.splice(index, 0, num);
};

// []
// [5]
MedianFinder.prototype.binarySearch = function(num) {
  let left = 0;
  let right = this.arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (this.arr[mid] === num) {
      return mid;
    }
    if (num < this.arr[mid]) {
      right = mid - 1;
    } else if (num > this.arr[mid]) {
      left = mid + 1;
    }
  }
  return left;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let middle = Math.floor(this.arr.length / 2);
  // 1,2,3,4
  if (this.arr.length % 2 == 0) {
    return (this.arr[middle] + this.arr[middle - 1]) / 2;
  }
  // 1,2,3
  else {
    return this.arr[middle];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
var obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
console.log(obj.findMedian()); // 1.5
obj.addNum(3);
console.log(obj.findMedian()); // 2
