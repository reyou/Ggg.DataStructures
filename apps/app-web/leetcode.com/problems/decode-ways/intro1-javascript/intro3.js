/**
 * @param {string} s
 * @return {number}
 */
// ""
// "1"
var numDecodings = function(s) {
  let result = resolve(s, 0, "");
  return result;
};

function numToChar(str) {
  let minCharCode = "a".charCodeAt(0) - 96;
  let maxCharCode = "z".charCodeAt(0) - 96;
  let strInt = parseInt(str);
  if (strInt < minCharCode || strInt > maxCharCode) {
    return false;
  }
  return true;
}

function resolve(str, counter, builder) {
  // leaf node
  if (counter >= str.length) {
    if (numToChar(builder)) {
      return 1;
    } else {
      return 0;
    }
  }
  // don't do this branching
  if (str[counter] === "0") {
    return 0;
  }
  let total = 0;
  for (let i = counter; i < str.length; i++) {
    // take 1
    let take1 = resolve(str, counter + 1, str.substring(counter, 1));
    // take 2
    let take2 = resolve(str, counter + 2, str.substring(counter, 2));
    total += take1 + take2;
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
function test5() {
  let result = numDecodings("27");
  console.log(result);
}

// test1(); // 2
test2(); // 3
// test3(); // 0
// test4(); // 2
// test5(); // 2
