function createMatrix(n) {
  let matrix = [];
  let counter = 1;
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = counter;
      counter++;
    }
  }
  return matrix;
}
function printMatrix(matrix) {
  console.log("=========================\n");
  for (let i = 0; i < matrix.length; i++) {
    let builder = "";
    for (let j = 0; j < matrix[i].length; j++) {
      builder += matrix[i][j];
      if (matrix[i][j] < 10) {
        builder += "   ";
      } else {
        builder += "  ";
      }
    }
    console.log(builder);
    console.log("");
  }
}

function rotateRight(matrix) {
  let length = matrix.length;
  for (let j = 0; j < matrix.length / 2; j++) {
    for (let i = j; i < matrix.length - j - 1; i++) {
      let temp = matrix[j][i + j];
      // T -> R
      temp = swap(matrix, temp, i + j, length - 1 - j);
      // R -> B
      temp = swap(matrix, temp, length - 1 - j, length - 1 - i - j);
      // B -> L
      temp = swap(matrix, temp, length - 1 - j - i, j);
      // L -> T
      temp = swap(matrix, temp, j, i + j);
    }
  }

  return matrix;
}

function swap(matrix, val, y1, y2) {
  let temp = matrix[y1][y2];
  matrix[y1][y2] = val;
  return temp;
}
let matrix = createMatrix(4);
printMatrix(matrix);
rotateRight(matrix);
printMatrix(matrix);
