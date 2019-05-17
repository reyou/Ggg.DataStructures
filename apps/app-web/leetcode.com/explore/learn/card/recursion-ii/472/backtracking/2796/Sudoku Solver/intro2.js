/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  function isSafe(row, col, num) {
    for (let i = 0; i < board.length; i++) {
      if (i === row) continue;
      if (board[i][col] === num) return false;
    }
    for (let i = 0; i < board[0].length; i++) {
      if (i === col) continue;
      if (board[row][i] === num) return false;
    }
    for (
      let i = Math.floor(row / 3) * 3;
      i <= Math.floor(row / 3) * 3 + 2;
      i++
    ) {
      for (
        let j = Math.floor(col / 3) * 3;
        j <= Math.floor(col / 3) * 3 + 2;
        j++
      ) {
        if (row === i && col === j) continue;
        if (board[i][j] === num) return false;
      }
    }
    return true;
  }

  function dfs(row, col) {
    if (col >= board[0].length) {
      return true;
    }
    if (row >= board.length) {
      row = 0;
      col += 1;
    }
    if (board[row][col] === ".") {
      for (let i = 1; i <= 9; i++) {
        if (isSafe(row, col, `${i}`)) {
          board[row][col] = `${i}`;
          if (dfs(row + 1, col)) {
            return true;
          }
          board[row][col] = ".";
        }
      }
      return false;
    }
    return dfs(row + 1, col);
  }
  dfs(0, 0);
  return board;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
solveSudoku(board);
console.log(JSON.stringify(board));
