function checkPerm(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }
  let map = [];
  for (let i = 0; i < s1.length; i++) {
    let char = s1[i].charCodeAt(0);
    map[char] = 1;
  }
  for (let j = 0; j < s2.length; j++) {
    let char = s2[j].charCodeAt(0);
    if (map[char] != 1) {
      return false;
    }
  }
  return true;
}

// true
console.log(checkPerm("abcd", "cbad"));

// false
console.log(checkPerm("abcd", "cbae"));
