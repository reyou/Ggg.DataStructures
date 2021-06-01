/**
 * @param {Array<Array<number>>} board
 * @return {boolean}
 */
const validSudoku = (board) => {
  // 9 sub grids
  let rowStart = 0;
  let rowEnd = 3;
  let colStart = 0;
  let colEnd = 3;

  while (rowStart < 9) {
    let hashMap = {};
    let rowHash = {};
    let colHash = {};
    for (let row = rowStart; row < rowEnd; row++) {
      // row check
      let rowNumbers = board[row];
      for (let i = 0; i < rowNumbers.length; i++) {
        if (rowHash[board[row][i]] !== undefined && board[row][i] !== 0) {
          return false;
        }
        rowHash[board[row][i]] = true;
      }
      rowHash = {};
      for (let column = colStart; column < colEnd; column++) {
        // column check
        let colNumbers = board[column];
        for (let i = 0; i < colNumbers.length; i++) {
          if (
            colHash[board[i][column]] !== undefined &&
            board[i][column] !== 0
          ) {
            return false;
          }
          colHash[board[i][column]] = true;
        }
        colHash = {};
        // box check
        if (
          hashMap[board[row][column]] !== undefined &&
          board[row][column] !== 0
        ) {
          return false;
        }
        hashMap[board[row][column]] = true;
      }
    }
    colStart += 3;
    if (colStart > 9) {
      colStart = 0;
      rowStart += 3;
    }
  }

  return true;
  // 9 rows and 9 columns
  // brute force
  // take first row and put in hash map
  // check if all unique
  // take first column and put in hash map
  // check if all unique
  // take second column and put in hash map
  // check if all unique
};

let result = validSudoku([
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]);

console.log(result);
