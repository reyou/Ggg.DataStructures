function createMatrix(rows, cols) {
  var min = 0;
  var max = 9;
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      let random = Math.floor(Math.random() * (+max - +min)) + +min;
      matrix[i][j] = random;
    }
  }
  return matrix;
}
function printMatrix(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    let builder = "";
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == -1) {
        builder += matrix[i][j] + "| ";
      } else {
        builder += matrix[i][j] + " | ";
      }
    }
    console.log(builder);
  }
  console.log("===========================\n");
}
function zeroMatrix(matrix) {
  resolve(matrix, 0, 0);
}
function resolve(matrix, row, col) {
  if (row > matrix.length - 1 || col > matrix[0].length - 1) {
    return;
  }
  let val = matrix[row][col];
  if (val == -1) {
    return;
  }
  if (val == 0) {
    applyZero(matrix, row, col);
    resolve(matrix, row + 1, col + 1);
    return;
  }
  // right
  resolve(matrix, row, col + 1);
  // bottom
  resolve(matrix, row + 1, col);
}
function applyZero(matrix, row, col) {
  // col 0z
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = -1;
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = -1;
  }
}
let matrix = createMatrix(5, 5);
printMatrix(matrix);
zeroMatrix(matrix);
printMatrix(matrix);
