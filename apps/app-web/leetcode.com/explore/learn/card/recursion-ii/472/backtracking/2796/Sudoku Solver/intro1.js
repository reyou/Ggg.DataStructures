var solveSudoku = function(board) {
  resolve(board);
};

function tryPlace(board, row, col, num) {
  for (let i = 0; i < board.length; i++) {
    if (i == row) continue;
    if (board[i][col] == num) return false;
  }
  for (let i = 0; i < board[0].length; i++) {
    if (i == col) continue;
    if (board[row][i] == num) return false;
  }
  for (let i = Math.floor(row / 3) * 3; i <= Math.floor(row / 3) * 3 + 2; i++) {
    for (
      let j = Math.floor(col / 3) * 3;
      j <= Math.floor(col / 3) * 3 + 2;
      j++
    ) {
      if (row == i && col == j) continue;
      if (board[i][j] == num) return false;
    }
  }
  board[row][col] = num + "";
  return true;
}

function resolve(board) {
  let row = null;
  let col = null;

  for (let i = 0; i < board.length; i++) {
    let found = false;
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == ".") {
        row = i;
        col = j;
        found = true;
        break;
      }
    }
    if (found) {
      break;
    }
  }
  if (row == null && col == null) {
    return true;
  }
  for (let i = 1; i <= 9; i++) {
    let isPlace = tryPlace(board, row, col, i);
    if (isPlace) {
      let result = resolve(board);
      if (result) {
        return true;
      } else {
        board[row][col] = ".";
      }
    }
  }
  return false;
}

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
