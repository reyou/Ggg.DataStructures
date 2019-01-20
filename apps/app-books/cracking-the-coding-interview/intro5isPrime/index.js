// 2, 3, 5, 7, 11, 13, 17, 19, 23
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 1; i < n / 2; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

for (var i = 0; i < 100; i++) {
  console.log(`result for ${i}: ${isPrime(i)}`);
}
