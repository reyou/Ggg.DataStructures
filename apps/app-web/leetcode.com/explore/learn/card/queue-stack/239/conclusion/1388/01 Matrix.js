/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 1) {
        resolve(matrix, i, j);
      }
    }
  }
  return matrix;
};

function isvisited(neighbor, visited) {
  for (let i = 0; i < visited.length; i++) {
    if (visited[i].row === neighbor.row && visited[i].col === neighbor.col) {
      return true;
    }
  }
  return false;
}
function resolve(matrix, row, col) {
  let cell = {
    row: row,
    col: col
  };

  let queue = [];
  let visited = [];
  queue.push(cell);

  let directions = [
    {
      row: -1,
      col: 0
    },
    {
      row: 0,
      col: 1
    },
    {
      row: 1,
      col: 0
    },
    {
      row: 0,
      col: -1
    }
  ];
  while (queue.length > 0) {
    let current = queue.shift();
    visited.push(current);
    for (var i = 0; i < directions.length; i++) {
      let neighbor = {
        row: current.row + directions[i].row,
        col: current.col + directions[i].col
      };
      if (neighbor.row >= 0 && neighbor.row < matrix.length) {
        if (neighbor.col >= 0 && neighbor.col < matrix[0].length) {
          if (!isvisited(neighbor, visited)) {
            if (matrix[neighbor.row][neighbor.col] == 0) {
              let rowDist = Math.abs(neighbor.row - row);
              let colDist = Math.abs(neighbor.col - col);
              matrix[row][col] = rowDist + colDist;
              return;
            }
            queue.push(neighbor);
            visited.push(neighbor);
          }
        }
      }
    }
  }
}

let matrix = updateMatrix([
  [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
  [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 0, 1, 0, 0, 1, 1]
]);

console.log(JSON.stringify(matrix));
