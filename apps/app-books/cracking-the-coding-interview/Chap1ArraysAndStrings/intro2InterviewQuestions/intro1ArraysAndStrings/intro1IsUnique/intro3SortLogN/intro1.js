function isUnique(str) {
  str = str
    .split("")
    .sort()
    .join("");
  for (let i = 0; i < str.length; i++) {
    if (i + 1 > str.length - 1) {
      console.log("unique");
      return;
    }
    if (str[i] == str[i + 1]) {
      console.log("not unique");
      return;
    }
  }
  console.log("unique");
}

let test1 = "abcdefg";
let test2 = "abcdefgxyza";
// true
isUnique(test1);
// false
isUnique(test2);
// exceptions empty
