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
  // substring problems usually uses sliding window technique
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = 0;
  }
  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]] === undefined) {
      return "";
    } else {
      hash[t[i]] += 1;
    }
  }
  let start = 0;
  let end = 0;
  let minLen = Number.MAX_VALUE;
  let minStart = 0;
  let numberOfTargets = t.length;
  while (end < s.length) {
    let current = s[end];
    if (hash[current] > 0) {
      numberOfTargets--;
    }
    hash[current] -= 1;
    while (numberOfTargets === 0) {
      if (minLen > end - start) {
        minLen = end - start;
        minStart = start;
      }
      let head = s[start];
      if (hash[head] >= 0) {
        numberOfTargets++;
      }
      hash[head] += 1;
      start++;
    }
    end++;
  }

  return minLen === Number.MAX_VALUE
    ? ""
    : s.substr(minStart, minStart + minLen);
};
let input1 = ["ADOBECODEBANC", "ABC"];
let input2 = ["ab", "a"];
let input3 = ["aa", "aa"];
let input4 = ["aa", "aaa"];
let input5 = ["bbaac", "aba"];
let input6 = ["aaflslflsldkalskaaa", "aaa"];
let input7 = ["a", "a"];
let result = minWindow(input7[0], input7[1]);
console.log(JSON.stringify(result));
