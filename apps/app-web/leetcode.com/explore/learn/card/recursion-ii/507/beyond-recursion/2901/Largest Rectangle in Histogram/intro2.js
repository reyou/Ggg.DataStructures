/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = [];
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    let currentVal = heights[i];
    if (stack.length == 0 || currentVal >= heights[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      while (stack.length > 0) {
        let lastItemIndex = stack.pop();
        let right = i;
        let left =
          stack.length > 0 ? stack[stack.length - 1] : lastItemIndex - 1;
        let area = heights[lastItemIndex] * (right - left - 1);
        max = Math.max(max, area);
      }
      stack.push(i);
    }
  }
  if (stack.length > 0) {
    while (stack.length > 0) {
      let lastItemIndex = stack.pop();
      let right = heights.length;
      let left = stack.length > 0 ? stack[stack.length - 1] : lastItemIndex;
      let area = heights[lastItemIndex] * (right - left - 1);
      max = Math.max(max, area);
    }
  }
  return max;
};

// 3
console.log(largestRectangleArea([2, 1, 2]));
// 4
console.log(largestRectangleArea([4, 2]));
// 1
console.log(largestRectangleArea([1]));
// 10
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
