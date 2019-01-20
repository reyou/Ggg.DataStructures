function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
for (var i = 0; i < 10; i++) {
  console.log(`result for ${i}: ${factorial(i)}`);
}
