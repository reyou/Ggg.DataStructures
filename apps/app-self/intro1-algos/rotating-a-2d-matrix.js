const rotate = (matrix) => {
  let target = [];
  for (let i = 0; i < matrix.length; i++) {
    target[i] = [];
  }
  for (let row = 0; row < matrix.length; row++) {
    let rowNumbers = matrix[row];
    for (let i = 0; i < rowNumbers.length; i++) {
      target[i][matrix.length - 1 - row] = rowNumbers[i];
    }
  }
  return target;
};

console.log(
  rotate([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ])
);
