function minPath(target) {
  return Math.min(resolve(0, target, 0, 1), resolve(0, target, 0, -1));
}
function resolve(current, target, counter, route) {
  if (current == -1) {
    current = 9;
  }
  if (current == 10) {
    current = 0;
  }
  if (current == target) {
    return counter;
  }
  let res = resolve(current + route, target, counter + 1, route);
  return res;
}

console.log(minPath(7));
