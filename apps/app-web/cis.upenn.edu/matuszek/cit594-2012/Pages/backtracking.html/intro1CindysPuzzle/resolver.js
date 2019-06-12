let board = [];
board[0] = 1;
board[1] = 1;
board[2] = null;
board[3] = 0;
board[4] = 0;

function resolver(board) {
  console.log(board);
  if (finished(board)) {
    console.log("resolved!");
    console.log(board);
    return true;
  }
  for (let i = 0; i < board.length; i++) {
    let canMoveResult = canMove(board, i);
    if (canMoveResult) {
      let newBoard = move(board.slice(0), i);
      if (resolver(newBoard)) {
        return true;
      }
    }
  }
  return false;
}

function finished(board) {
  if (
    board[0] == 0 &&
    board[1] == 0 &&
    board[2] == null &&
    board[3] == 1 &&
    board[4] == 1
  ) {
    return true;
  }
  return false;
}
function canMove(board, marble) {
  if (board[marble] == 1) {
    if (marble + 1 > board.length - 1) {
      return false;
    } else if (board[marble + 1] == null) {
      return true;
    } else if (
      board[marble + 1] == 0 &&
      board[marble + 2] == null &&
      marble + 2 < board.length
    ) {
      return true;
    }
  } else if (board[marble] == 0) {
    if (marble - 1 < 0) {
      return false;
    } else if (board[marble - 1] == null) {
      return true;
    } else if (
      board[marble - 1] == 1 &&
      board[marble - 2] == null &&
      marble - 2 > 0
    ) {
      return true;
    }
  }
  return false;
}
function move(board, marble) {
  if (board[marble] == 1) {
    if (marble + 1 > board.length) {
      return board;
    } else if (board[marble + 1] == null) {
      board[marble + 1] = 1;
      board[marble] = null;
      return board;
    } else if (
      board[marble + 1] == 0 &&
      board[marble + 2] == null &&
      marble + 2 < board.length
    ) {
      board[marble + 2] = 1;
      board[marble] = null;
      return board;
    }
  } else if (board[marble] == 0) {
    if (marble - 1 < 0) {
      return board;
    } else if (board[marble - 1] == null) {
      board[marble - 1] = 0;
      board[marble] = null;
      return board;
    } else if (
      board[marble - 1] == 1 &&
      board[marble - 2] == null &&
      marble - 2 > 0
    ) {
      board[marble - 2] = 0;
      board[marble] = null;
      return board;
    }
  }
  return board;
}

let result = resolver(board, 0);
if (!result) {
  console.log("cannot resolve");
}
