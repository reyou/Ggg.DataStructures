var getSkyline = function(buildings) {
  if (buildings == null || buildings.length == 0) {
    return [];
  }
  let results = [];
  let maxY = 0;
  for (let i = 0; i < buildings.length; i++) {
    let building = buildings[i];
    if (building[1] > maxY) {
      maxY = building[1];
    }
  }
  resolve(buildings, results);
  results.push([maxY, 0]);
  return results;
};

function resolve(buildings, results, prev) {
  let x = 0;
  let y = 1;
  let height = 2;
  if (buildings.length == 0) {
    return results;
  }
  let current = buildings.shift();
  if (prev == null) {
    results.push([current[0], current[2]]);
  } else {
    // if current's x is in between previous
    if (current[x] == prev[x]) {
      if (current[height] > prev[height]) {
        let lastResult = results.pop();
        lastResult[1] = current[height];
        results.push(lastResult);
      } else if (current[height] < prev[height]) {
        if (current[y] > prev[y]) {
          results.push([prev[y], current[height]]);
        } else {
          current[height] = prev[height];
        }
      } else {
        // height's are equal do not change
      }
    } else if (current[x] <= prev[y]) {
      // compare height's
      if (current[height] > prev[height]) {
        results.push([current[x], current[height]]);
      } else if (current[height] < prev[height]) {
        if (current[y] > prev[y]) {
          results.push([prev[y], current[height]]);
        } else {
          current[height] = prev[height];
        }
      } else {
        // height's are equal do not change
      }
    } else {
      // add previous end point
      results.push([prev[y], 0]);
      // add back and start from scratch
      buildings.unshift(current);
      return resolve(buildings, results, null);
    }
  }
  return resolve(buildings, results, current);
}

// [[1, 3], [5, 0]];
console.log(
  JSON.stringify(
    getSkyline([
      [0, 5, 7],
      [5, 10, 7],
      [5, 10, 12],
      [10, 15, 7],
      [15, 20, 7],
      [15, 20, 12],
      [20, 25, 7]
    ])
  )
);
