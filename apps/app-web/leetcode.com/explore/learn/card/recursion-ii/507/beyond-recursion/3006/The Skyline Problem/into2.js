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
  resolve(buildings, results, null, 0, 0);
  results.push([maxY, 0]);
  return results;
};

function resolve(buildings, results, prev, maxY, maxYHeight) {
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
    // same position
    if (current[x] == prev[x] && current[y] == prev[y]) {
      if (current[height] >= prev[height]) {
        let lastResult = results.pop();
        lastResult[1] = current[height];
        results.push(lastResult);
      } else {
        current[height] = prev[height];
      }
    } else if (current[x] == prev[y]) {
      if (current[height] == prev[height]) {
        current[x] = prev[x];
      } else if (current[height] > prev[height]) {
        results.push([current[x], current[height]]);
      } else {
        results.push([current[x], current[height]]);
      }
    }
    //
    else if (current[x] < prev[y]) {
      if (current[y] < prev[y]) {
        if (current[height] > prev[height]) {
          results.push([current[x], current[height]]);
        } else {
          current[x] = prev[x];
          current[y] = prev[y];
          current[height] = prev[height];
        }
      } else if (current[y] > prev[y]) {
        if (current[height] == prev[height]) {
          // debugger;
        } else if (current[height] > prev[height]) {
          results.push([current[x], current[height]]);
        } else {
          results.push([prev[y], current[height]]);
        }
      } else if (current[y] == prev[y]) {
        if (current[height] > prev[height]) {
          results.push([current[x], current[height]]);
        } else {
          debugger;
        }
      }
    } else if (current[x] < maxY) {
      results.push([prev[y], maxYHeight]);
      results.push([current[x], current[height]]);
    }
    // separated
    else if (current[x] > prev[y]) {
      // add previous end point
      results.push([prev[y], 0]);
      // add back and start from scratch
      buildings.unshift(current);
      return resolve(buildings, results, null, 0, 0);
    }
    // not captured
    else {
      debugger;
    }
  }
  if (current[y] > maxY) {
    maxY = current[y];
    maxYHeight = current[height];
  }
  return resolve(buildings, results, current, maxY, maxYHeight);
}

// [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
let input = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]];
console.log(JSON.stringify(getSkyline(input)));
