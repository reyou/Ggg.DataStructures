/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (b.length > a.length) {
    return addBinary(b, a);
  }
  let result = "";
  let add = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    // 1,0,0,1 + 1,1
    let valA = a[i];
    let valB = 0;
    for (let j = b.length - 1 - result.length; j >= 0; j--) {
      valB = b[j];
      break;
    }
    let val = parseInt(valA) + parseInt(valB) + add;
    let rem = val % 2;
    result = rem + result;
    if (val >= 2) {
      add = 1;
    } else {
      add = 0;
    }
  }
  if (add == 1) {
    result = add + result;
  }
  return result;
};
console.log(addBinary("1010", "1011"));
