var isIsomorphic = function(s, t) {
  let hashMap = {};
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] === undefined) {
      for (let key in hashMap) {
        if (hashMap[key] === t[i]) {
          return false;
        }
      }
      hashMap[s[i]] = t[i];
    } else {
      if (hashMap[s[i]] != t[i]) {
        return false;
      }
    }
  }
  return true;
};
console.log(isIsomorphic("ab", "aa"));
