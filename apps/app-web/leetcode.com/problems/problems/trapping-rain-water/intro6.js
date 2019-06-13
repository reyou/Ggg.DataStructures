var trap = function(height) {
  let totalAmount = 0;
  if (height == null || height.length == 0) {
    return totalAmount;
  }
  let leftWalls = [];
  leftWalls[0] = 0;
  console.log({
    leftWalls: JSON.stringify(leftWalls)
  });
  for (let i = 0; i < height.length; i++) {
    leftWalls[i + 1] = Math.max(leftWalls[i], height[i]);
    console.log({
      message: "leftWalls",
      i,
      "height[i]": height[i],
      leftWalls: JSON.stringify(leftWalls)
    });
  }
  let rightWall = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    rightWall = Math.max(height[i], rightWall);
    console.log({
      message: "rightWall",
      rightWall,
      i,
      "height.length": height.length
    });
    let diff = Math.min(leftWalls[i], rightWall) - height[i];
    totalAmount += diff > 0 ? diff : 0;
    console.log({
      message: "rightWall",
      totalAmount
    });
  }
  return totalAmount;
};
let input1 = [0, 1, 0, 1];
let input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let result = trap(input);
console.log(JSON.stringify(result));
