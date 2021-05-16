// https://en.wikipedia.org/wiki/Memoization

let cache = {};
function factorialFun(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  cache[n] = n * factorialFun(n - 1);
  return cache[n];
}

console.log(factorialFun(6));
console.log(cache);
