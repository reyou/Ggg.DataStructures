/**
 * @param {string} s
 * @return {number}
 */
const longestUniqueCharacterSubstring = (s) => {
  let chars = s.split('');
  let left = 0;
  let right = 0;
  let max = 0;
  let hash = {};
  while (right < s.length) {
    let char = chars[right];
    if (hash[char]) {
      left = Math.max(left, hash[char]);
    }
    hash[char] = right + 1;
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};
