const validSudoku = (board) => {
  let hash = {};
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let item = board[row][col];
      if (item != 0) {
        let rowKey = `${item} found in row ${row}`;
        let colKey = `${item} found in col ${col}`;
        let boxKey = `${item} found in box ${Math.floor(row / 3)}-${Math.floor(
          col / 3
        )}`;
        if (hash[rowKey]) {
          return false;
        } else {
          hash[rowKey] = true;
        }
        if (hash[colKey]) {
          return false;
        } else {
          hash[colKey] = true;
        }
        if (hash[boxKey]) {
          return false;
        } else {
          hash[boxKey] = true;
        }
      }
    }
  }
  return true;
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
