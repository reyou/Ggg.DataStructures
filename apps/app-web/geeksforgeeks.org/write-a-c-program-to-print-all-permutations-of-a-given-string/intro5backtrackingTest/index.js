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
  let builder = "";
  explore(builder, text);
}

function explore(builder, remaining) {
  if (remaining.length > 0) {
    for (let q = 0; q < remaining.length; q++) {
      let rem2 = remaining.substring(0, q) + remaining.substring(q + 1);
      let builder2 = builder + remaining[q];
      explore(builder2, rem2);
    }
  } else {
    console.log(builder);
  }
}

permute("abcd");
