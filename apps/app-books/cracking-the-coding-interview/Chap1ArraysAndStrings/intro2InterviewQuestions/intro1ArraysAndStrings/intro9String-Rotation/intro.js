function checkRotation(s1, s2) {
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
  let cycleCount = 0;
  for (let i = 0; i < s1Arr.length; i++) {
    let char = s1Arr[i];
    let s2Counter = find(char, s2Arr);
    if (s2Counter == -1) {
      return false;
    }
    let s1Counter = i;
    cycleCount = 0;
    for (let j = 0; j < s1.length; j++) {
      let s1Char = s1Arr[s1Counter];
      let s2Char = s2Arr[s2Counter];
      if (s1Char != s2Char) {
        break;
      }
      s1Counter++;
      if (s1Counter > s1Arr.length - 1) {
        s1Counter = 0;
      }
      s2Counter++;
      if (s2Counter > s2Arr.length - 1) {
        s2Counter = 0;
      }
      cycleCount++;
    }
    if (cycleCount == s1Arr.length) {
      return true;
    }
  }
  return false;
}
function find(char, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == char) {
      return i;
    }
  }
  return -1;
}

console.log(checkRotation("waterbottle", "erbottlewat"));
console.log(checkRotation("awaterbottle", "aerbottlewat"));
console.log(checkRotation("abaa", "aaba"));
