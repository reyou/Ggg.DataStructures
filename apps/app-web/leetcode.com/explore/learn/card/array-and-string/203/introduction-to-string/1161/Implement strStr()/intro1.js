/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // haystack = "llo", needle = "ll" (0)
  // haystack = "hello", needle = "ll" (2)
  // haystack = "aaaaa", needle = "bba" (-1)
  let p1 = 0;
  let p2 = 0;
  if (needle.length == 0) {
    return 0;
  }
  while (p1 < haystack.length) {
    if (haystack[p1] == needle[p2]) {
      p2++;
    } else {
      p1 = p1 - p2;
      p2 = 0;
    }
    p1++;
    if (p2 == needle.length) {
      // full match
      return p1 - p2;
    }
  }
  return -1;
};

console.log(strStr("mississippi", "issip"));
