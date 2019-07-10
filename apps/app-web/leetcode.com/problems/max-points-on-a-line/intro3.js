/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let max = 0;
  let hash = {};
  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    let key = point[0] + "-" + point[1];
    if (hash[key] === undefined) {
      hash[key] = 1;
    } else {
      hash[key] += 1;
    }
  }
  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    let result = resolve(hash, point, points);
    max = Math.max(max, result);
  }
  return max;
};

function resolve(hash, point, points) {
  if (hash[point[0] + "-" + point[1]] === undefined) {
    return 0;
  }
  let diagonal1 = 0;
  let diagonal2 = 0;
  let horizontal = 0;
  let vertical = 0;
  let x = point[0];
  let y = point[1];
  let xRight = x + 1;
  let yRight = y + 1;
  let yDown = y - 1;

  if (hash[xRight + "-" + yRight] !== undefined) {
    diagonal1 = resolve(hash, [xRight, yRight], points);
  } else if (hash[xRight + "-" + yDown] !== undefined) {
    diagonal2 = resolve(hash, [xRight, yDown], points);
  } else if (hash[xRight + "-" + y] !== undefined) {
    horizontal = resolve(hash, [xRight, y], points);
  } else if (hash[x + "-" + yRight] !== undefined) {
    vertical = resolve(hash, [x, yRight], points);
  }
  let key = point[0] + "-" + point[1];
  return hash[key] + Math.max(diagonal1, diagonal2, horizontal, vertical);
}

function test1() {
  let input = [[1, 1], [2, 2], [3, 3]];
  let result = maxPoints(input);
  console.log(result);
}
function test2() {
  let input = [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]];
  let result = maxPoints(input);
  console.log(result);
}
function test3() {
  let input = [[0, 0], [0, 0]];
  let result = maxPoints(input);
  console.log(result);
}
function test4() {
  let input = [[0, 0], [-1, -1], [2, 2]];
  let result = maxPoints(input);
  console.log(result);
}
// test1(); // 3
// test2(); // 4
// test3(); // 2
test4(); // 3
