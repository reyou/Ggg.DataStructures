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
function getHash(s, t) {
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
  return hash;
}
var minWindow = function(s, t) {
  if (t.length > s.length) {
    return "";
  }
  let hash = getHash(s, t);
  let length = t.length;
  let left = 0;
  let right = 0;
  let found = 0;
  let best = Number.MAX_VALUE;
  let result = "";
  while (true) {
    if (left > s.length - 1) {
      break;
    }

    let char = s[right];
    let isFound = false;
    // char found
    if (hash[char] > 0) {
      hash[char] -= 1;
      found++;
      if (found == length) {
        if (right - left < best) {
          best = right - left;
          result = s.substr(left, best + 1);
        }
        hash = getHash(s, t);
        found = 0;
        left++;
        right = left;
        isFound = true;
      }
    }
    if (!isFound) {
      right++;
    }

    if (right > s.length - 1) {
      left++;
      right = left;
      found = 0;
    }
  }
  return result;
};
let input1 = ["ADOBECODEBANC", "ABC"];
let input2 = ["ab", "a"];
let input3 = ["aa", "aa"];
let input4 = ["aa", "aaa"];
let input5 = ["bbaac", "aba"];
let input6 = ["aaflslflsldkalskaaa", "aaa"];
let result = minWindow(input5[0], input5[1]);
console.log(JSON.stringify(result));
