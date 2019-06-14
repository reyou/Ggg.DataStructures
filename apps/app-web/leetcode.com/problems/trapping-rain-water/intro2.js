/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // - if wall goes up, if it reaches level of left pointer
  // calculate water
  let water = 0;
  let stack = [];
  let lastLeftWall = 0;
  for (let i = 0; i < height.length; i++) {
    stack.push(height[i]);
    // leveling down
    if (height[i] < stack[stack.length - 1]) {
    }
    // leveling up
    else if (height[i] > stack[stack.length - 1]) {
      water += calculateWater(stack);
    }
  }
  return water;
};

function calculateWater(stack) {}

let input = [0, 1, 0, 1];
let input2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let result = trap(input);
console.log(JSON.stringify(result));
