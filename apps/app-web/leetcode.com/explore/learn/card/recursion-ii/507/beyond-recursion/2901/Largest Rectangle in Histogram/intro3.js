var largestRectangleArea = function(heights) {
  if (heights == null || heights.length == 0) {
    return 0;
  }
  let stack = [];
  let max = 0;
  let arrayCounter = 0;
  while (arrayCounter < heights.length) {
    // push index to stack when the current height is larger than the previous one
    if (
      stack.length == 0 ||
      heights[arrayCounter] >= heights[stack[stack.length - 1]]
    ) {
      stack.push(arrayCounter);
      arrayCounter++;
    } else {
      // calculate max value when the current height is less than the previous one
      let topStackElement = stack.pop();
      let itemHeight = heights[topStackElement];
      let wide =
        stack.length == 0
          ? arrayCounter
          : arrayCounter - stack[stack.length - 1] - 1;
      let area = itemHeight * wide;
      max = Math.max(area, max);
    }
  }
  // for only ladder type (increasing-only) histograms.
  while (stack.length > 0) {
    let topStackElement = stack.pop();
    let itemHeight = heights[topStackElement];
    let wide =
      stack.length == 0
        ? arrayCounter
        : arrayCounter - stack[stack.length - 1] - 1;
    let area = itemHeight * wide;
    max = Math.max(area, max);
  }
  return max;
};

// 3
console.log(largestRectangleArea([2, 1, 2]));
// 4
console.log(largestRectangleArea([4, 2]));
// 1
console.log(largestRectangleArea([1]));
// 2
console.log(largestRectangleArea([1, 1]));
// 10
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
