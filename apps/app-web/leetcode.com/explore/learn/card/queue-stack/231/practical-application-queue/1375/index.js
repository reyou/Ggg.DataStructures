function minPath(target, deadend) {
  let visited = [];
  let queue = [];
  queue.push(0);
  visited[0] = 1;
  let path = 0;
  while (true) {
    if (queue.length === 0) {
      return -1;
    }
    let children = [];
    while (queue.length > 0) {
      children.push(queue.shift());
    }
    for (let i = 0; i < children.length; i++) {
      let val = children[i];
      if (val === target) {
        return path;
      }
      if (val === deadend) {
        continue;
      }

      let up = val + 1;
      if (up > 99) {
        up = 0;
      }
      let down = val - 1;
      if (down < 0) {
        down = 99;
      }
      if (!visited[up]) {
        visited[up] = 1;
        queue.push(up);
      }
      if (!visited[down]) {
        visited[down] = 1;
        queue.push(down);
      }
    }
    path++;
  }
}

console.log(minPath(98, 99));
