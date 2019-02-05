function palperm(str) {
  let arr = str.split("");
  let map = [];
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char == " ") continue;
    let code = char.charCodeAt(0);
    if (map[code]) {
      map[code]++;
    } else {
      map[code] = 1;
    }
  }
  return checkIfPalindrome(map);
}

function checkIfPalindrome(map) {
  let singleCount = 0;
  for (let i = 0; i < map.length; i++) {
    if (!map[i]) continue;
    if (map[i] % 2 == 0) continue;
    singleCount++;
  }
  return singleCount <= 1;
}

console.log(palperm("tact coa"));
console.log(palperm("ktrp ptkrs"));
