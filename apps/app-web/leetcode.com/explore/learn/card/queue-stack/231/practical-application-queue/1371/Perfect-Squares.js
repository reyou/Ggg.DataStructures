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
  // start here
};

console.log(numSquares(12));
