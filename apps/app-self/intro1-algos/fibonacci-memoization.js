function fibMemoization(n, cache) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (cache[n]) {
    return cache[n];
  }
  cache[n] = fibMemoization(n - 1, cache) + fibMemoization(n - 2, cache);
  console.log(cache);
  return cache[n];
}

console.log(fibMemoization(14, {}));
