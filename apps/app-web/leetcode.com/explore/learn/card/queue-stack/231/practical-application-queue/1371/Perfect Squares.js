/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let squares = [];
  let counter = 1;
  while (true) {
    let result = counter * counter;
    if (result > n) {
      break;
    }
    squares.push(result);
    counter++;
  }
  let visited = [];
  let queue = [];
  let total = 0;
  for (let i = squares.length - 1; i >= 0; i--) {
    queue.push(squares[i]);
  }
  while (queue.length > 0) {
    let number = queue.shift();
    total = total + number;
    if (total == n) {
      return counter2;
    } else if (total > n) {
      total = total - number;
    }
    if (!visited[total]) {
      visited[total] = 1;
      // add neighbours
      for (let i = squares.length - 1; i >= 0; i--) {
        queue.push(squares[i]);
      }
    }
  }
  return -1;
};

console.log(numSquares(12));
