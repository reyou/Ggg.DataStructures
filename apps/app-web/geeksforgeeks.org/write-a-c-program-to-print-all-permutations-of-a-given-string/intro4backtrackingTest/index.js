/*
abc
    a
      ab
        abc
      ac
        acb
    b
    c
*/

function permute(text) {
  let left = text;
  let builder = "";
  explore(left, builder);
}
function explore(left, builder) {
  if (left.length == 0) {
    console.log(builder);
  } else {
    for (let i = 0; i < left.length; i++) {
      let remaining = left.substring(0, i) + left.substring(i + 1);
      explore(remaining, builder + left[i]);
    }
  }
}
permute("abc");
