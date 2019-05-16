function buildMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = [0];
    }
  }
  return matrix;
}
var totalNQueens = function(n) {
  let matrix = buildMatrix(n);
  let result = resolve(matrix, 0, n, 0);
  return result;
};

function tryPlace(matrix, row, col) {
  for (let i = 0; i < matrix.length; i++) {
    // check same row
    if (matrix[row][i] == 1) {
      return false;
    }
    // check same col
    if (matrix[i][col] == 1) {
      return false;
    }
    // check diagonal
    // top left
    if (row - i >= 0 && col - i >= 0) {
      if (matrix[row - i][col - i] == 1) {
        return false;
      }
    }
    // top right
    if (row - i >= 0 && col + i < matrix.length) {
      if (matrix[row - i][col + i] == 1) {
        return false;
      }
    }
    // bottom right
    if (row + i < matrix.length && col + i < matrix.length) {
      if (matrix[row + i][col + i] == 1) {
        return false;
      }
    }
    // bottom left
    if (row + i < matrix.length && col - i >= 0) {
      if (matrix[row + i][col - i] == 1) {
        return false;
      }
    }
  }
  matrix[row][col] = 1;
  return true;
}
function printMatrix(arr) {
  let arrText = "";
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      arrText += arr[i][j] + " ";
    }
    console.log(arrText);
    arrText = "";
  }
  console.log("\n========================\n");
}
function resolve(matrix, row, target, total) {
  if (row >= target) {
    printMatrix(matrix);
    debugger;
    return total + 1;
  }
  for (let col = 0; col < target; col++) {
    let isPlace = tryPlace(matrix, row, col);
    if (isPlace) {
      total = resolve(matrix, row + 1, target, total);
      matrix[row][col] = 0;
      printMatrix(matrix);
      debugger;
    }
  }

  return total;
}

console.log(totalNQueens(4));
