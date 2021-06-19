/**
 * @param {Array<number>} buildings
 * @return {Array<number>}
 */
const getBuildingsWithAView = (buildings) => {
  // Input: [11, 12, 13, 14, 15]
  // Input:  [7, 4, 8, 2, 9]
  // Input:  [11, 7, 4, 8, 2, 9]
  // Input:  [11, 7, 4, 8, 2, 13]
  // Input: [15, 14, 13, 12, 11]

  let stack = buildings;
  let unblocked = [];
  let index = stack.length - 1;
  while (true) {
    let current = stack.pop();
    let found = false;
    for (let i = stack.length - 1; i > -1; i--) {
      if (current <= stack[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      unblocked.push(index);
    }
    if (stack.length === 0) {
      break;
    }
    index--;
  }
  return unblocked.reverse();
};

console.log(getBuildingsWithAView([11, 12, 13, 14, 15]));
