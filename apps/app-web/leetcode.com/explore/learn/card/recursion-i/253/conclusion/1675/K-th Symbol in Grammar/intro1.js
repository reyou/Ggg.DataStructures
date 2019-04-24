/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
  let result = resolve(N, K, [0], 1, []);
  return result;
};

function resolve(row, col, arr, count, memo) {
  console.log(`row: ${row} arr: ${arr} count: ${count}`);
  if (row == count) {
    return arr[col - 1];
  }
  let temp = [];
  while (arr.length > 0) {
    let item = arr.shift();
    if (item == 0) {
      temp.push(0);
      temp.push(1);
    } else {
      temp.push(1);
      temp.push(0);
    }
  }
  count++;
  let result = resolve(row, col, temp, count, memo);
  return result;
}
