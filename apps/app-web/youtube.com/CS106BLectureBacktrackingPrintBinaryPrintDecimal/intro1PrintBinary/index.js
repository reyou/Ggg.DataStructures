function PrintBinary(n) {
  let builder = "";
  Resolver(builder, n);
}

function Resolver(builder, n) {
  if (builder.length == n) {
    console.log(builder);
    return;
  } else {
    for (let i = 0; i < 2; i++) {
      Resolver(builder + i.toString(), n);
    }
  }
}

PrintBinary(3);
