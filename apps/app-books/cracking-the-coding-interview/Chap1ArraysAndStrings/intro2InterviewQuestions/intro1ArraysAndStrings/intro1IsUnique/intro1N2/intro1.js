function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        console.log("not unique");
        return;
      }
    }
  }
  console.log("unique");
}

let test1 = "abcdefg";
let test2 = "abcdefgaxyz";
// true
isUnique(test1);
// false
isUnique(test2);
// exceptions empty
