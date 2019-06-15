/*
Given a collection of intervals, 
merge all overlapping intervals. */
/*Example 1:
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6]. */
/*Example 2:
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping. */
/*
 
*/
var merge = function(intervals) {
  if (intervals === null || intervals.length < 2) {
    return intervals;
  }
  let results = [];
  results = resolve(intervals, 1);
  let filtered = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i] != null) {
      filtered.push(results[i]);
    }
  }
  return filtered;
};

function resolve(intervals, left) {
  if (left > intervals.length - 1) {
    return intervals;
  }
  for (let i = left; i < intervals.length; i++) {
    let merged = mergeArrays(intervals[i - 1], intervals[i]);
    if (merged.length == 2) {
      return resolve(intervals, left + 1);
    } else {
      intervals[i - 1] = null;
      intervals[i] = merged[0];
      return resolve(intervals, left);
    }
  }
  return intervals2;
}

function mergeArrays(arr1, arr2) {
  if (arr1 == null) {
    return [arr2[0], arr2[1]];
  }
  if (arr2 == null) {
    return [arr1[0], arr1[1]];
  }
  if (arr2[0] < arr1[0]) {
    return mergeArrays(arr2, arr1);
  }
  let result = [];
  let temp = [];
  temp[0] = Math.min(arr1[0], arr2[0]);
  temp[3] = Math.max(arr1[1], arr2[1]);
  if (arr1[1] < arr2[0]) {
    temp[1] = arr1[1];
    temp[2] = arr2[0];
  } else {
    return [[temp[0], temp[3]]];
  }
  result.push([temp[0], temp[1]]);
  result.push([temp[2], temp[3]]);
  return result;
}

let input1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
let input2 = [[1, 4], [4, 5]];
let input3 = [[1, 4], [0, 4]];
let input4 = [[1, 4], [0, 0]];
let input5 = [[1, 3], [2, 6], [8, 10], [15, 18]];
let input6 = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]];
let input = input6;
let output = merge(input);
console.log(JSON.stringify(output));
