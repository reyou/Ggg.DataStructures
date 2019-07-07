/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let result = resolve(s);
  return result;
};

function resolve(str) {
  if (str.length == 0) {
    return 0;
  }
  // " 3+2"
  if (str[0] == " ") {
    return resolve(str.substring(1));
  }
  // "3*2+2"
  if (str[1] == "*") {
    let temp = parseInt(str[0]) * parseInt(str[2]);
    return resolve(temp + str.substring(2));
  }
  // "3/2+2"
  else if (str[1] == "/") {
    let temp = Math.floor(parseInt(str[0]) / parseInt(str[2]));
    return resolve(temp + str.substring(2));
  }
  // "3*2+2"
  else if (str[1] == "+") {
    let temp = parseInt(str[0]) + parseInt(str[2]);
    return resolve(temp + str.substring(2));
  }
  // "3/2+2"
  else if (str[1] == "-") {
    let temp = parseInt(str[0]) - parseInt(str[2]);
    return resolve(temp + str.substring(2));
  }
  return parseInt(str);
}

function test1() {
  let result = calculate("3+2*2");
  console.log(result);
}
test1();
