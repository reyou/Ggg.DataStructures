/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let queue = [];
  let targetColor = image[sr][sc];
  if (targetColor == newColor) {
    return image;
  }
  queue.push({
    row: sr,
    col: sc,
    val: image[sr][sc]
  });
  while (true) {
    if (queue.length == 0) {
      break;
    }
    let cell = queue.pop();
    if (cell.val == targetColor) {
      image[cell.row][cell.col] = newColor;
    } else {
      continue;
    }
    let top, right, bottom, left;
    if (cell.row - 1 >= 0) {
      top = {
        row: cell.row - 1,
        col: cell.col,
        val: image[cell.row - 1][cell.col]
      };
      if (image[cell.row - 1][cell.col] == targetColor) {
        queue.push(top);
      }
    }
    if (cell.col + 1 < image[0].length) {
      right = {
        row: cell.row,
        col: cell.col + 1,
        val: image[cell.row][cell.col + 1]
      };
      if (image[cell.row][cell.col + 1] == targetColor) {
        queue.push(right);
      }
    }
    if (cell.row + 1 < image.length) {
      bottom = {
        row: cell.row + 1,
        col: cell.col,
        val: image[cell.row + 1][cell.col]
      };
      if (image[cell.row + 1][cell.col] == targetColor) {
        queue.push(bottom);
      }
    }
    if (cell.col - 1 >= 0) {
      left = {
        row: cell.row,
        col: cell.col - 1,
        val: image[cell.row][cell.col - 1]
      };
      if (image[cell.row][cell.col - 1] == targetColor) {
        queue.push(left);
      }
    }
  }
  return image;
};

console.log(floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1));
return;
console.log(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 2));
return;
console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));
