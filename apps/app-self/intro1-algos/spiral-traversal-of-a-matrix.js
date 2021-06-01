/**
 * @param {Array<Array<number>>} matrix
 * @return {Array<number>}
 */
const spiralOrder = (matrix) => {
  let result = [];
  spiralOrderInternal(
    matrix,
    0, // row start
    matrix.length - 1, // row end
    0, // col start
    matrix[0].length - 1, // col end
    'right',
    result
  );
  return result;
};

function spiralOrderInternal(
  matrix,
  rowStart,
  rowEnd,
  colStart,
  colEnd,
  direction,
  result
) {
  if (rowEnd < rowStart || colEnd < colStart) {
    return;
  }
  if (direction === 'right') {
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    spiralOrderInternal(
      matrix,
      ++rowStart,
      rowEnd,
      colStart,
      colEnd,
      'bottom',
      result
    );
  } else if (direction === 'bottom') {
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    spiralOrderInternal(
      matrix,
      rowStart,
      rowEnd,
      colStart,
      --colEnd,
      'left',
      result
    );
  } else if (direction === 'left') {
    for (let i = colEnd; i >= colStart; i--) {
      result.push(matrix[rowEnd][i]);
    }
    spiralOrderInternal(
      matrix,
      rowStart,
      --rowEnd,
      colStart,
      colEnd,
      'top',
      result
    );
  } else if (direction === 'top') {
    for (let i = rowEnd; i >= rowStart; i--) {
      result.push(matrix[i][colStart]);
    }
    spiralOrderInternal(
      matrix,
      rowStart,
      rowEnd,
      ++colStart,
      colEnd,
      'right',
      result
    );
  }
}
let result = spiralOrder([
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
]);

console.log(result);
