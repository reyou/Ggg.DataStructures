/*Given a string S and a string T, find the minimum 
window in S which will contain all the characters in 
T in complexity O(n). */
/*Example:
Input: S = "ADOBECODEBANC", 
T = "ABC"
Output: "BANC" */
/*Note:
If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S. */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length) {
    return "";
  }
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = [i];
    } else {
      hash[s[i]].push(i);
    }
  }
  let intervals = [];
  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]] === undefined) {
      return "";
    }
    intervals.push(hash[t[i]]);
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let stack = [];
  stack.push(intervals[0]);
  let points = [];
  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let prevInterval = stack.pop();
    let minDiff = getMinDiff(prevInterval, currentInterval);
    if (minDiff[0] === minDiff[1]) {
      points.push(currentInterval[0]);
      points.push(currentInterval[1]);
    } else {
      points.push(minDiff[0]);
      points.push(minDiff[1]);
    }
    stack.push(minDiff);
  }
  if (points.length < 2) {
    let singleElementIndex = stack.pop();
    return s[singleElementIndex];
  }
  let result = s.substr(points[0], points[points.length - 1] + 1);
  return result;
};

function getMinDiff(prevInterval, currentInterval) {
  let min = Number.MAX_VALUE;
  let points = [];
  for (let i = 0; i < prevInterval.length; i++) {
    for (let j = 0; j < currentInterval.length; j++) {
      let diff = Math.abs(prevInterval[i] - currentInterval[j]);
      if (diff < min) {
        min = diff;
        points[0] = prevInterval[i];
        points[1] = currentInterval[j];
      }
    }
  }
  points.sort((a, b) => a - b);
  return points;
}

let input1 = ["ADOBECODEBANC", "ABC"];
let input2 = ["ab", "a"];
let input3 = ["aa", "aa"];
let input4 = ["aa", "aaa"];
let input5 = ["bbaac", "aba"];
let result = minWindow(input5[0], input5[1]);
console.log(JSON.stringify(result));
