/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if (s.length == 0) {
    return 0;
  }
  let trimmed = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      trimmed += s[i];
    }
  }
  let result = resolve(trimmed, 0);
  return result;
};

function resolve(str, totalMinus) {
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] == "*") {
      let temp = parseInt(str[i]) * parseInt(str[i + 2]);
      return resolve(
        str.substring(0, i) + temp + str.substring(i + 3),
        totalMinus
      );
    }
    // "3/2+2"
    else if (str[i + 1] == "/") {
      let temp = Math.floor(parseInt(str[i]) / parseInt(str[i + 2]));
      return resolve(
        str.substring(0, i) + temp + str.substring(i + 3),
        totalMinus
      );
    }
  }

  for (let i = 0; i < str.length; i++) {
    // "3*2+2"
    // "3+2*2"
    if (str[i + 1] == "+") {
      let temp = parseInt(str[i]) + parseInt(str[i + 2]);
      return resolve(
        str.substring(0, i) + temp + str.substring(i + 3),
        totalMinus
      );
    }
    // "3/2+2"
    else if (str[i + 1] == "-") {
      let temp = parseInt(str[i]) - parseInt(str[i + 2]);
      if (temp < 0) {
        temp = temp * -1;
        totalMinus += temp * 2;
      }
      return resolve(
        str.substring(0, i) + temp + str.substring(i + 3),
        totalMinus
      );
    }
  }

  return parseInt(str) - totalMinus;
}

function test1() {
  let result = calculate("3+2*2");
  console.log(result);
}
function test2() {
  let result = calculate(" 3/2 ");
  console.log(result);
}
function test3() {
  let result = calculate(" 3+5 / 2 ");
  console.log(result);
}
function test4() {
  let result = calculate("2-3+4");
  console.log(result);
}
function test5() {
  let result = calculate("0-2147483647");
  console.log(result);
}
test1(); // 7
test2(); // 1
test3(); // 5
test4(); // 3
test5(); // -2147483647
