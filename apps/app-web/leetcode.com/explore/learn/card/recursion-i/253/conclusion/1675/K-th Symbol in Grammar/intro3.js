/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
  let result = resolve(N, K);
  return result;
};

function resolve(row, col) {
  console.log(`row: ${row} col: ${col}`);
  if (row == 1) {
    return 0;
  }
  let result;
  if (col % 2 == 0) {
    result = kthGrammar(row - 1, col / 2);
    if (result == 0) {
      return 1;
    }
    return 0;
  } else {
    result = kthGrammar(row - 1, (col + 1) / 2);
    return result;
  }
}

console.log(resolve(2, 2));
console.log(resolve(4, 2));
