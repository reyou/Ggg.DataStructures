/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s === null || s.length === 0) {
    return 0;
  }
  let builder = "";
  let result = resolve(s, builder);
  return result;
};

function numToChar(str) {
  let minCharCode = "a".charCodeAt(0) - 96;
  let maxCharCode = "z".charCodeAt(0) - 96;
  let strInt = parseInt(str);
  if (strInt.toString().length != str.length) {
    return false;
  }
  if (strInt < minCharCode || strInt > maxCharCode) {
    return false;
  }
  return true;
}

// 12
function resolve(rem, builder) {
  if (rem.length == 0) {
    if (numToChar(builder)) {
      return 1;
    }
    return 0;
  }
  let total = 0;
  for (let i = 0; i < rem.length; i++) {
    let builder2 = builder + rem[i];
    let rem2 = rem.slice(i + 1);
    total += resolve(rem2, builder2);
  }
  return total;
}

function test1() {
  let result = numDecodings("12");
  console.log(result);
}
function test2() {
  let result = numDecodings("226");
  console.log(result);
}
function test3() {
  let result = numDecodings("01");
  console.log(result);
}
function test4() {
  let result = numDecodings("10");
  console.log(result);
}

// test1(); // 2
// test2(); // 3
test3(); // 0
test4(); // 10
