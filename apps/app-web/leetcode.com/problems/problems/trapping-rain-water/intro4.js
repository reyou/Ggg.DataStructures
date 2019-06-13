/**
 * A Simple Solution is to traverse every array element and find the
 * highest bars on left and right sides. Take the smaller of two heights.
 * The difference between smaller height and height of current element
 * is the amount of water that can be stored in this array element.
 * Time complexity of this solution is O(n2).
 */
var trap = function(height) {
  let water = 0;
  console.log({
    message: "init",
    height: JSON.stringify(height)
  });
  for (let left = 1; left < height.length - 1; left++) {
    console.log("\n=============\n");
    let maxLeft = 0;
    let maxRight = 0;
    console.log({
      message: "for loop",
      left,
      "height.length - 1": height.length - 1
    });
    // Search the left part for max bar size
    for (let right = left; right >= 0; right--) {
      console.log({
        message: "Search the left part",
        left,
        right
      });
      maxLeft = Math.max(maxLeft, height[right]);
      console.log({
        message: "Search the left part",
        left,
        right,
        maxLeft
      });
    }
    // Search the right part for max bar size
    for (let right = left; right < height.length; right++) {
      console.log({
        message: "Search the right part",
        "height.length": height.length,
        left,
        right
      });
      maxRight = Math.max(maxRight, height[right]);
      console.log({
        message: "Search the right part",
        "height.length": height.length,
        left,
        right,
        maxRight
      });
    }

    water += Math.min(maxLeft, maxRight) - height[left];
    console.log({
      message: "calculate water",
      maxLeft,
      maxRight,
      left,
      "height[left]": height[left],
      water
    });
  }
  return water;
};
let input = [0, 1, 0, 1];
let input2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let result = trap(input);
console.log(JSON.stringify(result));
