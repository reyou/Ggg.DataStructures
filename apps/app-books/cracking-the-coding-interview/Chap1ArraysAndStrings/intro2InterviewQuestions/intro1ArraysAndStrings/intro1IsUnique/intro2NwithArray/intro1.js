// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
function isUnique(str) {
  let map = [];
  for (let i = 0; i < str.length; i++) {
    let charCode = str[i].charCodeAt(0);
    if (map[charCode] == 1) {
      console.log("not unique");
      return;
    }
    map[charCode] = 1;
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
