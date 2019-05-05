var findDiagonalOrder = function(matrix) {
  if (matrix.length == 0) {
    return [];
  }
  let row = 0;
  let col = 0;
  let max_row = matrix.length - 1;
  let max_col = matrix[0].length - 1;
  let result = [];
  for (let i = 0; i < matrix.length * matrix[0].length; i++) {
    result[i] = matrix[row][col];
    if ((row + col) % 2 == 0) {
      // move up row--,col++
      // Ex: [0,0], [1,1], [2, 0], [2,2]
      if (col == max_col) {
        row++;
      } else if (row == 0) {
        col++;
      } else {
        row--;
        col++;
      }
    } else {
      // move down row++,col--
      if (row == max_row) {
        col++;
      } else if (col == 0) {
        row++;
      } else {
        row++;
        col--;
      }
    }
  }

  return result;
};

console.log(findDiagonalOrder([]));
console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
