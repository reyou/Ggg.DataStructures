var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return "";
  }
  if (strs.length == 1) {
    return strs[0];
  }
  // ["flower","flow","flight"]
  let result = "";
  let limit = strs.length;
  let charIndex = 0;
  while (true) {
    let prev = strs[0][charIndex];
    for (let i = 1; i < limit; i++) {
      if (charIndex == strs[i].length) {
        return result;
      }
      let curr = strs[i][charIndex];
      if (prev != curr) {
        return result;
      }
    }
    result += prev;
    charIndex++;
  }
};
