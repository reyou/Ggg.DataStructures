/*
abc   a (bc)   ab,ac   abc,acb
      b (ac)   ba,bc   bac,bca
      c (ab)  ca,cb   cab,cba
*/

function permute(text) {
  let left = text;
  let right = "";
  explore(text, left, right);
}
function explore(text, left, right) {
  if (right.length >= text.length) {
    console.log(right);
  } else {
    for (let i = 0; i < left.length; i++) {
      let remaining = left.substring(0, i) + left.substring(i + 1);
      explore(text, remaining, right + left[i]);
    }
  }
}
permute("abc");
