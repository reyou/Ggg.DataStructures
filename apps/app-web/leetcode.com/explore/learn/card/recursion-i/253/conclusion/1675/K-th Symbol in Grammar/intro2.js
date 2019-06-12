/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
  let arr = [0, 1];
  if (N <= 2) {
    return arr[K - 1];
  }
  let length = Math.pow(2, N - 1);
  let col = K - 1;
  let mirrorIndex = col;
  let flipped = false;
  while (length > 2) {
    length = length / 2;
    if (col > length - 1) {
      mirrorIndex = ((col + 1) % length) - 1;
      flipped = false;
      col = mirrorIndex;
    } else {
      flipped = true;
    }
  }
  if (flipped) {
    if (mirrorIndex == 0) mirrorIndex = 1;
    else mirrorIndex = 0;
  }
  return arr[mirrorIndex];
};
console.log(kthGrammar(4, 6));
