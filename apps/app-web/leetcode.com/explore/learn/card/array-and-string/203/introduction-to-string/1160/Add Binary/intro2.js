var addBinary = function(a, b) {
  let p1 = a.length - 1;
  let p2 = b.length - 1;
  let result = "";
  let carry = 0;
  while (p1 >= 0 || p2 >= 0) {
    let aVal = 0;
    let bVal = 0;
    if (p1 >= 0) {
      aVal = a[p1];
      p1--;
    }
    if (p2 >= 0) {
      bVal = b[p2];
      p2--;
    }
    let temp = parseInt(aVal) + parseInt(bVal) + carry;
    let rem = temp % 2;
    result = rem + result;
    if (temp >= 2) {
      carry = 1;
    } else {
      carry = 0;
    }
  }
  if (carry > 0) {
    result = carry + result;
  }
  return result;
};
console.log(addBinary("1010", "1011"));
