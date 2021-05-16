function fibonacciFunc(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  return fibonacciFunc(n - 1) + fibonacciFunc(n - 2);
}

console.log(fibonacciFunc(14));
