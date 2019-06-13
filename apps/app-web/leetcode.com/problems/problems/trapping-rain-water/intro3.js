/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let water = 0;
  for (let left = 1; left < height.length - 1; left++) {
    let maxLeft = 0;
    let maxRight = 0;
    // Search the left part for max bar size
    for (let right = left; right >= 0; right--) {
      maxLeft = Math.max(maxLeft, height[right]);
    }
    // Search the right part for max bar size
    for (let right = left; right < height.length; right++) {
      maxRight = Math.max(maxRight, height[right]);
    }
    water += Math.min(maxLeft, maxRight) - height[left];
  }
  return water;
};
let input2 = [0, 1, 0, 1];
let input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let result = trap(input);
console.log(JSON.stringify(result));
