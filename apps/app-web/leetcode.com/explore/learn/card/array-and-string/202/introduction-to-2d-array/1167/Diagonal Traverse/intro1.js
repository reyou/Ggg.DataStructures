var findDiagonalOrder = function(matrix) {
  if (matrix.length == 0) {
    return [];
  }
  // up: 1,1 -> row--,col++
  // down: 0,1 -> row++,col--
  let row = 0;
  let col = 0;
  let isUp = true;
  let result = [];
  while (true) {
    if (result.length == matrix.length * matrix[0].length) {
      break;
    }
    if (isUp) {
      while (true) {
        if (
          row > -1 &&
          row < matrix.length &&
          col > -1 &&
          col < matrix[0].length
        ) {
          result.push(matrix[row][col]);
        }
        col++;
        row--;
        if (row < 0) {
          row = 0;
          break;
        }
      }
    } else {
      while (true) {
        if (
          row > -1 &&
          row < matrix.length &&
          col > -1 &&
          col < matrix[0].length
        ) {
          result.push(matrix[row][col]);
        }
        row++;
        col--;
        if (col < 0) {
          col = 0;
          break;
        }
      }
    }
    isUp = !isUp;
  }
  return result;
};

console.log(findDiagonalOrder([]));
console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
