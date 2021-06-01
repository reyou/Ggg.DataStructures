/**
 * @param {string} s
 * @return {number}
 */
// aabbc
// xyz
// abcbacbbZ
const longestPalindrome = (s) => {
  let chars = s.split('');
  let hashMap = {};
  let longest = 0;
  let singles = 0;
  for (let i = 0; i < chars.length; i++) {
    if (hashMap[chars[i]]) {
      hashMap[chars[i]] = 0;
      longest += 2;
      singles -= 1;
    } else {
      singles += 1;
      hashMap[chars[i]] = 1;
    }
  }
  if (singles > 0) {
    longest++;
  }
  return longest;
};

console.log(longestPalindrome('abcbacbbZ'));
