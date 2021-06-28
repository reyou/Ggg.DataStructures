var isMatch = function (s, p) {
  // TOP-Down Memoization
  return dfs(0, 0, s, p);
};

function dfs(i, j, s, p) {
  if (i >= s.length && j >= p.length) {
    return true;
  }
  if (j >= s.length) {
    return false;
  }
  let match = i < s.length && (s[i] === p[j] || p[j] === '.');
  if (j + 1 < p.length && p[j + 1] === '*') {
    // branch
    // don't use * (0 repeat), so stay on string and increase j
    // let branch1 = dfs(i, j + 2, s, p);
    // use star (1 or N repeat), re-use star(*), don't increase j
    // let branch2 = dfs(i + 1, j, s, p);
    return dfs(i, j + 2, s, p) || (match && dfs(i + 1, j, s, p));
  }
  if (match) {
    return dfs(i + 1, j + 1, s, p);
  }
  return false;
}

console.log(isMatch('aaaaa', 'a*a*a*'));
console.log(isMatch('aaaa', 'a*'));
console.log(isMatch('aaaa', 'a*a*'));
console.log(isMatch('mississippi', 'mis*is*p*'));
console.log(isMatch('mississippi', 'mis*is*ip*i'));
