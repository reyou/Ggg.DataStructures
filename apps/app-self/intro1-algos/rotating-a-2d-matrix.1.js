const rotate = (matrix) => {
  // matrix 4x4
  // calculate how many levels
  // for each level
  // start pointers
  // top, right, bottom, left
  // swap elements
  // iterate 4 times in first layer
  // iterate 2 times in second layer
  let layerCount = Math.floor(matrix.length / 2);
  let size = matrix.length - 1;

  for (let layer = 0; layer < layerCount; layer++) {
    for (let i = layer; i < size - layer; i++) {
      let top = matrix[layer][i];
      let right = matrix[i][size - layer];
      let bottom = matrix[size - layer][size - i];
      let left = matrix[size - i][layer];
      matrix[i][size - layer] = top;
      matrix[size - layer][size - i] = right;
      matrix[size - i][layer] = bottom;
      matrix[layer][i] = left;
    }
  }

  return matrix;
};

console.log(
  rotate([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ])
);
