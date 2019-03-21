/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

function isDeadEnd(deadends, item) {
  for (let i = 0; i < deadends.length; i++) {
    if (deadends[i] === item) {
      return true;
    }
  }
  return false;
}
function getArrString(arr) {
  let builder = "";
  for (let i = 0; i < arr.length; i++) {
    builder += arr[i];
  }
  return builder;
}
var openLock = function(deadends, target) {
  let queue = [];
  let visited = [];
  queue.push("0000");
  let path = 0;
  while (queue.length > 0) {
    let children = [];
    while (queue.length > 0) {
      let item = queue.shift();
      children.push(item);
    }
    for (let k = 0; k < children.length; k++) {
      let item = children[k];
      if (item === target) {
        return path;
      }
      if (isDeadEnd(deadends, item)) {
        continue;
      }
      for (let i = 0; i < item.length; i++) {
        let itemArr = item.split("");
        let up = parseInt(itemArr[i]) + 1;
        let down = parseInt(itemArr[i]) - 1;
        if (up > 9) up = 0;
        if (down < 0) down = 9;
        itemArr[i] = up;
        var itemString = getArrString(itemArr);
        if (!visited[itemString]) {
          visited[itemString] = 1;
          queue.push(itemString);
        }
        itemArr[i] = down;
        itemString = getArrString(itemArr);
        if (!visited[itemString]) {
          visited[itemString] = 1;
          queue.push(itemString);
        }
      }
    }
    path++;
  }
  return -1;
};

let deadends = ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"];
let target = "8888";
let count = openLock(deadends, target);
console.log(count);
