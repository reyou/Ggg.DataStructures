function backwards(www) {
  console.log(www);
  if (www > 0) {
    backwards(www - 1);
  }
}
function forward(www) {
  if (www > 0) {
    forward(www - 1);
  }
  console.log(www);
}

backwards(10);
console.log("-----");
forward(10);
