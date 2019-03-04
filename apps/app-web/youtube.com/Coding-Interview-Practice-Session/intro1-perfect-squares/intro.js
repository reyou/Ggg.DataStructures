var numSquares = function(n) {
  var s = {};
  s[0] = 0;
  s[1] = 1;
  for (var i = 1; i <= n; ++i) {
    for (j = 1; j * j <= i; ++j) {
      var gap = i - j * j;
      if (s[i] == undefined) {
        s[i] = s[gap] + 1;
      } else {
        s[i] = Math.min(s[i], s[gap] + 1);
      }
    }
  }
  return s[n];
};

console.log(numSquares(12));
console.log(numSquares(13));
console.log(numSquares(21));
