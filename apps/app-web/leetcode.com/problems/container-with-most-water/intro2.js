/*Given n non-negative integers a1, a2, ..., an , where each 
represents a point at coordinate (i, ai). n vertical lines 
are drawn such that the two endpoints of line i is at (i, ai) 
and (i, 0). Find two lines, which together with x-axis forms a container, 
such that the container contains the most water.

Note: You may not slant the container and n is at least 2. */
/*Input: [1,8,6,2,5,4,8,3,7]
Output: 49 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let builder = [];
  let max = calc(height.length, height, builder, 0, 0);
  return max;
};
function calc(total, height, builder) {
  if (builder.length == 2) {
    let area =
      Math.min(builder[0].val, builder[1].val) *
      (builder[1].index - builder[0].index);
    return area;
  }
  let max = Number.MIN_VALUE;
  for (let i = 0; i < height.length; i++) {
    let current = height[i];
    builder.push({
      index: total - height.length,
      val: current
    });
    let height2 = height.slice(i + 1);
    let area = calc(total, height2, builder);
    max = Math.max(max, area);
    builder.pop();
  }
  return max;
}
let input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let input2 = [1, 2, 4, 3];
let output = maxArea(input2);
console.log(JSON.stringify(output));
