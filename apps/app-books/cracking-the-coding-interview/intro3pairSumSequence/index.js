// Consider the below func­
// tion, which adds adjacent elements between O and n:
function pairSumSequence(n) {
  var sum = 2;
  for (var i = 0; i < n; i++) {
    sum += pairSum(i, i + 1);
  }
  return sum;
}
function pairSum(a, b) {
  return a + b;
}

console.log(pairSumSequence(4));
