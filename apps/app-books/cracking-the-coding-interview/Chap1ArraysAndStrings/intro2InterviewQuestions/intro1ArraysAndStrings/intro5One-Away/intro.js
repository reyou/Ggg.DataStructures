function oneAway(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let map = [];
  for (let i = 0; i < arr1.length; i++) {
    let charCode = arr1[i].charCodeAt(0);
    if (!map[charCode]) map[charCode] = 1;
    else map[charCode]++;
  }
  for (let i = 0; i < arr2.length; i++) {
    let charCode = arr2[i].charCodeAt(0);
    map[charCode] = 0;
  }
  let diff = 0;
  for (let i = 0; i < map.length; i++) {
    if (map[i] > 0) {
      diff++;
    }
  }
  return diff <= 1;
}

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));
