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
  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]] === undefined) {
      hash[t[i]] = 1;
    } else {
      hash[t[i]] += 1;
    }
  }
  let target = t.length;
  let left = 0;
  let right = 0;
  let minDistance = Number.MAX_VALUE;
  let minLeft = 0;
  while (right < s.length) {
    let char = s[right];
    if (hash[char] !== undefined && hash[char] > 0) {
      hash[char] = hash[char] - 1;
      target--;
    }
    if (target == 0) {
      while (true) {
        let windowChar = s[left];
        if (hash[windowChar] === undefined) {
          left++;
        } else {
          break;
        }
      }
      if (right - left < minDistance) {
        minDistance = right - left;
        minLeft = left;
      }
      while (true) {
        let windowChar = s[left];
        if (hash[windowChar] !== undefined) {
          // restore
          hash[windowChar] = hash[char] + 1;
          target++;
        }
        if (target == t.length) {
          break;
        }
        left++;
      }
    } else {
      right++;
    }
  }
  if (minDistance === Number.MAX_VALUE) {
    return "";
  }
  return s.substr(minLeft, minDistance + 1);
};
let input1 = ["ADOBECODEBANC", "ABC"];
let input2 = ["ab", "a"];
let input3 = ["aa", "aa"];
let input4 = ["aa", "aaa"];
let input5 = ["bbaac", "aba"];
let input6 = ["aaflslflsldkalskaaa", "aaa"];
let input7 = ["a", "b"];
let input8 = ["abc", "b"];
let input9 = ["bdab", "ab"];
let result = minWindow(input5[0], input5[1]);
console.log(JSON.stringify(result));
