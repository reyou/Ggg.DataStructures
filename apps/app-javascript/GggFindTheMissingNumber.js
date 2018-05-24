// Find the missing number | GeeksforGeeks
// https://www.youtube.com/watch?v=lBk6fVhuCyw
// http://www.geeksforgeeks.org/find-the-missing-number/
function getMissingNo(a, n) {
  var i = 0;
  var total = (n + 1) * (n + 2) / 2;
  for (i = 0; i < n; i++) {
    total -= a[i];
  }
  return total;
}

var a = [1, 2, 4, 5, 6];
var miss = getMissingNo(a, a.length);
console.log(miss);
