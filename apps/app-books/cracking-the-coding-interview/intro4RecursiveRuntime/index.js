function foo(n) {
  if (n <= 1) {
    return 1;
  }
  return foo(n - 1) + foo(n - 1);
}

for (var i = 0; i < 10; i++) {
  console.log(`result for ${i}: ${foo(i)}`);
}
