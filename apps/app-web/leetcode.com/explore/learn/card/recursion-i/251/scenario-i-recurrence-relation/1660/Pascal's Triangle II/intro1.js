/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let arr = [];
  arr[0] = 1;
  arr[rowIndex] = 1;
  let hash = [];
  resolve(rowIndex, 1, arr, hash);
  return arr;
};

function resolve(rowIndex, col, arr, hash) {
  if (col == 0 || col == rowIndex) {
    return 1;
  }
  if (rowIndex == 1) {
    return 1;
  }
  if (hash[rowIndex]) {
    if (hash[rowIndex][col]) {
      return hash[rowIndex][col];
    }
  }
  let result = 0;
  for (let i = 1; i < rowIndex; i++) {
    result =
      resolve(rowIndex - 1, i - 1, arr, hash) +
      resolve(rowIndex - 1, i, arr, hash);
    if (!hash[rowIndex]) hash[rowIndex] = [];
    else {
      if (!hash[rowIndex][i]) {
        hash[rowIndex][i] = result;
      }
    }

    if (arr.length - 1 == rowIndex) {
      arr[i] = result;
    }
  }
  return result;
}
