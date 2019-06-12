function permute(str) {
  permute2("", str);
}
function permute2(builder, rem) {
  if (rem.length == 0) {
    console.log(builder);
    return;
  }
  for (let i = 0; i < rem.length; i++) {
    // abc -> bc -> c
    rem2 = rem.substring(0, i) + rem.substring(i + 1);
    // "" + [[a]bc]
    let builder2 = builder + rem.substring(i, i + 1);
    // ("a","bc")
    permute2(builder2, rem2);
  }
}

permute("abc");
