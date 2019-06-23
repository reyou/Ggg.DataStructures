var exist = function(board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      let builder = [];
      let visited = {};
      let result = resolve(board, word, builder, row, col, visited);
      if (result) {
        return true;
      }
    }
  }
  return false;
};
function resolve(board, word, builder, row, col, visited) {
  let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  if (board[row][col] === word[builder.length]) {
    let key = `${row}-${col}`;
    visited[key] = true;
    builder.push(board[row][col]);
    if (builder.join("") === word) {
      return true;
    }
    for (let i = 0; i < directions.length; i++) {
      let row2 = row + directions[i][0];
      let col2 = col + directions[i][1];
      let key2 = `${row2}-${col2}`;
      if (visited[key2] !== undefined) {
        continue;
      }
      if (row2 >= 0 && row2 < board.length) {
        if (col2 >= 0 && col2 < board[0].length) {
          let result = resolve(board, word, builder, row2, col2, visited);
          if (result) {
            return true;
          }
        }
      }
    }
    builder.pop();
    delete visited[key];
  }

  return false;
}
let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
// true
let word1 = "ABCCED";
// true
let word2 = "SEE";
// false
let word3 = "ABCB";

console.log(exist(board, word1)); // true
console.log(exist(board, word2)); // true
console.log(exist(board, word3)); // false
console.log(exist([["a"]], "a")); // true
console.log(exist([["a", "b"], ["c", "d"]], "acdb")); // true
console.log(exist([["a", "b"], ["c", "d"]], "abcd")); // false
console.log(
  exist(
    [["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]],
    "ABCEFSADEESE"
  )
); // true
