let matrix = createMatrix(3, 3);
printMatrix(matrix);
function printMatrix(matrix) {
  let getSeperator = function(w, l) {
    if (w + 1 < l) {
      return "|";
    } else {
      return "";
    }
  };
  for (let q = 0; q < matrix.length; q++) {
    let builder = "";
    for (let w = 0; w < matrix.length; w++) {
      builder = builder + matrix[q][w] + getSeperator(w, matrix.length);
    }
    console.log(builder);
  }
}
function createMatrix(width, height) {
  let matrix = [];
  let counter = 1;
  for (let q = 0; q < width; q++) {
    matrix[q] = [];
    for (let w = 0; w < height; w++) {
      matrix[q][w] = counter;
      counter++;
    }
  }
  return matrix;
}
