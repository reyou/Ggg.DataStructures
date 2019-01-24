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

function resolve(soFar, rest) {
  if (rest == "") {
    console.log(soFar);
  } else {
    resolve(soFar + rest[0], rest.substring(1));

    resolve(soFar, rest.substring(1));
  }
}

subsets("abc");
