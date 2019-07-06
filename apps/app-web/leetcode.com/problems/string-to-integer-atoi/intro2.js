/**
 * @param {string} str
 * @return {number}
 */

// "42" -> 42
// "   -42" - > -42
// "4193 with words" -> 4193
// "words and 987" -> 0
// "-91283472332" ->  -2147483648
var myAtoi = function(str) {
  let intMin = -2147483648;
  let intMax = 21474836487;
  let chars = str.split("");
  let num = 0;
  let multi = 1;
  let isNegative = false;
  for (let i = chars.length - 1; i >= 0; i--) {
    let char = chars[i];
    if (char == "-") {
      isNegative = true;
    } else if (char == " " || char == "+") {
      continue;
    } else if (char == ".") {
      num = 0;
      multi = 1;
      continue;
    } else {
      let charInt = parseInt(char);

      if (charInt.toString() === "NaN") {
        if (Math.abs(num) > 0) {
          return 0;
        }
      } else {
        num += multi * charInt;
        multi *= 10;
      }
    }
  }
  if (isNegative) {
    let result = -1 * num;
    if (result < intMin) {
      return intMin;
    }
    return result;
  }
  if (num > intMax) {
    return intMax;
  }
  return num;
};

function test1() {
  console.log(myAtoi("42"));
}
function test2() {
  console.log(myAtoi("-42"));
}
function test3() {
  console.log(myAtoi("4193 with words"));
}
function test4() {
  console.log(myAtoi("words and 987"));
}
function test5() {
  console.log(myAtoi("-91283472332"));
}
function test6() {
  console.log(myAtoi("   -42"));
}
function test7() {
  console.log(myAtoi("3.14159"));
}
function test8() {
  console.log(myAtoi("+1"));
}
function test9() {
  console.log(myAtoi("+-2"));
}
// test1(); // 42;
// test2(); // -42
// test3(); // 4193
// test4(); // 0
// test5(); // -2147483648
// test6(); // -42
// test7(); // 3
// test8(); // 1
test9(); // 0
