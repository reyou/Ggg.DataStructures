/*Given an input string (s) and a pattern (p), 
implement regular expression matching with support for '.' and '*'. */
/*
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:
s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *. */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// example1: ("aa","a") = false
// example1: ("aa","a*") = true
var isMatch = function(s, p) {
  if (s === null || s.length < 1) {
    return false;
  }
  let wordQueue = s.split("");
  let regexQueue = p.split("");
  while (true) {
    if (regexQueue.length === 0 || wordQueue.length === 0) {
      break;
    }
    let regexChar = regexQueue.shift();

    if (regexChar === ".") {
      // any character
      // abc a.c
      if (regexQueue.length > 0 && regexQueue[0] === "*") {
        // qwer .*r
        regexQueue.shift();
        while (wordQueue.length > 0) {
          wordQueue.shift();
        }
      } else {
        wordQueue.shift();
      }
    } else {
      if (regexQueue.length > 0 && regexQueue[0] === "*") {
        // a* pattern
        // aaab - a*b
        // aab - c*a*b
        regexQueue.shift();
        let char = wordQueue.shift();
        while (true) {
          if (char !== regexChar) {
            wordQueue.unshift(char);
            break;
          }
          char = wordQueue.shift();
          if (wordQueue.length === 0) break;
          if (wordQueue[0] !== regexChar) break;
        }
        // clean remainings same elements
        while (true) {
          if (regexQueue.length > 0 && regexQueue[0] === regexChar) {
            regexQueue.shift();
          } else {
            break;
          }
        }
      } else {
        // single char(a) pattern
        // aabbc - aabbc = true
        // aabbc - aabbcd = false
        let char = wordQueue.shift();
        if (char !== regexChar) {
          return false;
        }
      }
    }
    if (
      wordQueue.length === 0 &&
      regexQueue.length > 1 &&
      regexQueue[1] === "*"
    ) {
      wordQueue.push(s[s.length - 1]);
    }
  }
  return wordQueue.length == 0 && regexQueue.length === 0;
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
console.log(isMatch("aaca", "ab*a*c*a")); // true
