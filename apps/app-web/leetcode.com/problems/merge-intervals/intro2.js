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
  return results;
};

function resolve(intervals, left) {
  if (left > intervals.length - 1) {
    return intervals;
  }
  let intervals2 = [];
  for (let i = 0; i < left - 1; i++) {
    intervals2.push(intervals[i]);
  }
  for (let i = left; i < intervals.length; i++) {
    let merged = mergeArrays(intervals[i - 1], intervals[i]);
    if (merged.length == 2) {
      left += 1;
      return resolve(intervals, left);
    } else {
      for (let j = 0; j < merged.length; j++) {
        intervals2.push(merged[j]);
      }
      intervals2 = intervals2.concat(intervals.slice(i + 1));
      return resolve(intervals2, left);
    }
  }
  return intervals2;
}

function mergeArrays(arr1, arr2) {
  let result = [];
  if (arr1[1] < arr2[0]) {
    result.push(arr1);
    result.push(arr2);
    return result;
  }
  if (arr1[1] > arr2[1]) {
    result.push(arr1);
  } else if (arr1[1] >= arr2[0]) {
    result.push([arr1[0], arr2[1]]);
  }
  return result;
}

let input1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
let input2 = [[1, 4], [4, 5]];
let input = input1;
let output = merge(input);
console.log(JSON.stringify(output));
