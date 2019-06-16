var merge = function(intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let results = [];
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    if (results.length == 0) {
      results.push(interval);
    } else {
      let last = results.pop();
      if (interval[0] > last[1]) {
        results.push(last);
        results.push(interval);
      } else if (interval[1] > last[1]) {
        last[1] = interval[1];
        results.push(last);
      } else {
        results.push(last);
      }
    }
  }
  return results;
};

let input1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
let input2 = [[1, 4], [4, 5]];
let input3 = [[1, 4], [0, 4]];
let input4 = [[1, 4], [0, 0]];
let input5 = [[1, 3], [2, 6], [8, 10], [15, 18]];
let input6 = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]];

let output = merge(input1);
console.log(JSON.stringify(output));
