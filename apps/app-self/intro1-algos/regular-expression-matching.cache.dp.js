var isMatch = function (s, p) {
  // TOP-Down Memoization
  let cache = {};
  let result = dfs(0, 0, s, p, cache);
  console.log(JSON.stringify(cache, null, 4));
  return result;
};

function dfs(i, j, s, p, cache) {
  if (cache[`${i}-${j}`] !== undefined) {
    console.log(`Cache found: ${i}-${j}`);
    return cache[`${i}-${j}`];
  } else {
    console.log(`Cache not found: ${i}-${j}`);
  }
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
    cache[`${i}-${j}`] =
      dfs(i, j + 2, s, p, cache) || (match && dfs(i + 1, j, s, p, cache));
    console.log(`Added to cache: ${i}-${j}`);
    return cache[`${i}-${j}`];
  }
  if (match) {
    cache[`${i}-${j}`] = dfs(i + 1, j + 1, s, p, cache);
    console.log(`Added to cache: ${i}-${j}`);
    return cache[`${i}-${j}`];
  }
  cache[`${i}-${j}`] = false;
  console.log(`Added to cache: ${i}-${j}`);
  return false;
}
// console.log(isMatch('aaaa', 'a*'));
console.log(isMatch('aabaa', 'a*ba*'));
// console.log(isMatch('aaaa', 'a*a*'));
// console.log(isMatch('mississippi', 'mis*is*p*'));
// console.log(isMatch('mississippi', 'mis*is*ip*i'));
