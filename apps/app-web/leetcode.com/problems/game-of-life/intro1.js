/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function calculateState(board, row, col) {
  let nCount = 0;
  let steps = [-1, 0, 1];
  for (let i = 0; i < steps.length; i++) {
    let rowStep = steps[i];
    for (j = 0; j < steps.length; j++) {
      if (steps[i] == 0 && steps[j] == 0) continue;
      let colStep = steps[j];
      if (row + rowStep >= 0 && row + rowStep < board.length) {
        if (col + colStep >= 0 && col + colStep < board[0].length) {
          let nValue = board[row + rowStep][col + colStep];
          nCount += nValue;
        }
      }
    }
  }
  if (board[row][col] === 1) {
    if (nCount < 2) return 0;
    if (nCount === 2 || nCount === 3) return 1;
    return 0;
  } else {
    return nCount === 3 ? 1 : 0;
  }
}
var gameOfLife = function(board) {
  let result = [];
  for (let i = 0; i < board.length; i++) {
    result[i] = [];
  }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let cellState = calculateState(board, row, col);
      result[row][col] = cellState;
    }
  }
  for (let row = 0; row < result.length; row++) {
    for (let col = 0; col < result[0].length; col++) {
      board[row][col] = result[row][col];
    }
  }
};
