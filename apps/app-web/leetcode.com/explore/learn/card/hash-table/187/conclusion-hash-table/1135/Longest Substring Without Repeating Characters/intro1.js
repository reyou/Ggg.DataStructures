/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let hashMap = {};
  let counter = 0;
  let max = 0;
  let left = 0;
  while (left < s.length) {
    if (hashMap[s[left]] === undefined) {
      hashMap[s[left]] = left;
      counter++;
      left++;
    } else {
      if (counter > max) {
        max = counter;
      }
      left = hashMap[s[left]] + 1;
      hashMap = {};
      counter = 0;
    }
  }

  if (counter > max) {
    max = counter;
  }
  return max;
};

console.log(lengthOfLongestSubstring("aab"));
