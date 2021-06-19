function power(n, m) {
  if (m === 0) {
    return 1;
  }
  // divide problem
  let x = power(n, Math.floor(m / 2));

  // conquer problem
  if (m % 2 === 0) {
    return x * x;
  } else {
    return x * x * n;
  }
}

console.log(power(5, 0));
console.log(power(5, 3));
console.log(power(5, 5));
