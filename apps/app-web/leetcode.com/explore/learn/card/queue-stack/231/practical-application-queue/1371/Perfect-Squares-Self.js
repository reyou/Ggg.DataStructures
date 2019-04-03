function numSquares(n) {
  let db = [];
  for (let i = 0; i < n + 1; i++) {
    db[i] = 99999;
  }
  db[0] = 0;
  db[1] = 1;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j * j <= i; j++) {
      db[i] = Math.min(db[i], db[i - j * j] + 1);
    }
  }
  return db[n];
}
console.log(numSquares(12));
