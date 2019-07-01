/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // base case
  if (p.length === 0) {
    return s.length === 0;
  }
  // special case
  if (p.length === 1) {
    if (s.length === 0) {
      return false;
    } else if (p.charAt(0) != "." && p.charAt(0) != s.charAt(0)) {
      return false;
    } else {
      return isMatch(s.substring(1), p.substring(1));
    }
  }
  // current char is a letter or dot(.) with no * following
  else if (p.charAt(1) != "*") {
    if (s.length === 0) {
      return false;
    } else if (p.charAt(0) != "." && p.charAt(0) != s.charAt(0)) {
      return false;
    } else {
      return isMatch(s.substring(1), p.substring(1));
    }
  }
  // current char is followed by a *
  else {
    // char + * can represent 0 occurence
    if (isMatch(s, p.substring(2))) {
      return true;
    }
    // char + * represents 1 or more occurence
    let i = 0;
    while (i < s.length) {
      if (p.charAt(0) != "." && p.charAt(0) != s.charAt(i)) {
        return false;
      }
      if (isMatch(s.substring(i + 1), p.substring(2))) {
        return true;
      }
      i++;
    }
  }
  return false;
};

// console.log(isMatch("aa", "a")); // false
// console.log(isMatch("aa", "a*")); // true
// console.log(isMatch("ab", ".*")); // true
// console.log(isMatch("aab", "c*a*b")); // true
// console.log(isMatch("mississippi", "mis*is*p*.")); // false
// console.log(isMatch("aaa", "a*a")); // true
// console.log(isMatch("ab", ".*c")); // false
// console.log(isMatch("aaa", "ab*a*c*a")); // true
// console.log(isMatch("aaa", "aaaa")); // false
// console.log(isMatch("aaca", "ab*a*c*a")); // true
console.log(isMatch("aaa", "a.a")); // true
