var myPow = function(x, n) {
  let result = 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    if (i % 2 == 1) {
      result = x * result;
    }
    x = x * x;
  }
  return result;
};

console.log(myPow(2, 0));
console.log(myPow(2, 1));
console.log(myPow(2, 2));
console.log(myPow(2, 3));
console.log(myPow(2, 10));
console.log(myPow(2, 11));
console.log(myPow(0.00001, 2147483647));
