/* 
abc
    a
        ab
            abc
        ac
            acb
    b
        ba
            bac
        bc
            bca
    c
        ca
            cab
        cb
            cba
*/
function permute(text) {
  permute2("", text);
}
function permute2(builder, remaining) {
  if (remaining.length != 0) {
    for (let i = 0; i < remaining.length; i++) {
      let rem = remaining.substring(0, i) + remaining.substring(i + 1);
      permute2(builder + remaining[i], rem);
    }
  } else {
    console.log(builder);
  }
}

permute("abc");
