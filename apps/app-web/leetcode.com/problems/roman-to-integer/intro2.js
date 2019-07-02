let roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
let subtract = {
  I: ["V", "X"],
  X: ["L", "C"],
  C: ["D", "M"]
};

var romanToInt = function(s) {
  let result = resolve(s);
  return result;
};

function resolve(str) {
  if (str.length == 0) {
    return 0;
  }
  if (str.length == 1) {
    return roman[str];
  }
  let total = 0;
  // "IX" = 9
  if (
    subtract[str.charAt(0)] !== undefined &&
    subtract[str.charAt(0)].indexOf(str.charAt(1)) > -1
  ) {
    total += roman[str.charAt(1)] - roman[str.charAt(0)];
    total += resolve(str.substring(2));
  } else {
    total += roman[str[0]];
    total += resolve(str.substring(1));
  }
  return total;
}
