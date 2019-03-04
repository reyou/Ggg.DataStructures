function resolve(data) {
  let builder = "";
  let rem = data;
  return resolve2(data, builder, rem, []);
}
function resolve2(data, builder, rem) {
  console.log(builder);
  if (rem.length == 0) {
    return;
  }
  for (let i = 0; i < rem.length; i++) {
    let builder2 = builder + rem[i];
    let rem2 = rem.substring(i + 1);
    resolve2(data, builder2, rem2);
  }
}

console.log(resolve("1234"));
