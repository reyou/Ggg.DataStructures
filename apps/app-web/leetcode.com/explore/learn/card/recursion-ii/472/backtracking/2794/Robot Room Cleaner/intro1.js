var cleanRoom = function(robot) {
  resolve(robot, 0, 0, 0, {});
};

let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
function resolve(robot, row, col, dir, visited) {
  visited[`${row}-${col}`] = 1;
  robot.clean();
  // going clockwise 0: up, 1: right, 2: bottom, 3: left
  for (let i = 0; i < 4; i++) {
    let newDir = (dir + i) % 4;
    let newRow = row + directions[newDir][0];
    let newCol = col + directions[newDir][1];
    if (!visited[`${newRow}-${newCol}`] && robot.move()) {
      resolve(robot, newRow, newCol, newDir, visited);
      rollback(robot);
    }
    // turn the robot following chosen direction: clockwise
    robot.turnRight();
  }
}

function rollback(robot) {
  // [][->] -> [->][]
  robot.turnRight();
  robot.turnRight();
  robot.move();
  robot.turnRight();
  robot.turnRight();
}
