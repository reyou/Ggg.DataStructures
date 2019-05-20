/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let result = resolve(heights, [], 0);
  return result;
};

function calculate(selected) {
  if (selected.length == 0) return 0;
  let min = Math.min(selected);
  return min * selected.length;
}

function resolve(heights, selected, prevArea) {
  console.log(selected);
  let area = calculate(selected);
  if (prevArea > area) {
    return prevArea;
  }
  let max = 0;
  for (let i = selected.length; i < heights.length; i++) {
    let buffer = [];
    for (let j = 0; j <= i; j++) {
      buffer.push(heights[j]);
    }
    let result = resolve(heights, buffer, area);
    if (result > max) {
      max = result;
    }
  }
  return max;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
