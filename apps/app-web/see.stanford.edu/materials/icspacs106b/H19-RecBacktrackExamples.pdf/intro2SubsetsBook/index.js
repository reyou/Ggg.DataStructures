/* 
abc
ab
ac
a
bc
b
c 
*/
function subsets(text) {
  resolve("", text);
}
let depth = "-";
function resolve(soFar, rest) {
  console.log("incoming:", soFar, rest);
  if (rest == "") {
    console.log(depth + soFar);
  } else {
    depth = depth + "-"
    resolve(soFar + rest[0], rest.substring(1));
    depth = depth + "-"
    resolve(soFar, rest.substring(1));
  }
  depth = depth.substring(1)
}

subsets("abc");
