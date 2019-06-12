function permutations(str) {
  let arr = str.split("");
  let result = [];
  let builder = "";
  let rem = arr;
  resolve(arr, result, builder, rem);
  return result;
}

function resolve(arr, result, builder, remaining) {
  if (builder.length === arr.length) {
    result.push(builder);
  }
  for (let i = 0; i < remaining.length; i++) {
    let builder2 = builder + remaining[i];
    let rem2 = remaining.slice(0, i).concat(remaining.slice(i + 1));
    resolve(arr, result, builder2, rem2);
  }
  return result;
}

console.log(permutations("ab"));
console.log(permutations("abc"));
console.log(permutations("abcd"));
