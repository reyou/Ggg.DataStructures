/**
 * @param {string} s
 * @return {boolean}
 * '(', ')', '{', '}', '[' and ']'
 */
var isValid = function(s) {
  let chars = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  let pickStack = s.split("");
  let pushStack = [];
  while (pickStack.length > 0) {
    let char = pickStack.pop();
    if (char == "(" || char == "{" || char == "[") {
      if (pushStack.length == 0) {
        return false;
      }
      let pushedChar = pushStack.pop();
      if (pushedChar != chars[char]) {
        return false;
      }
    } else {
      pushStack.push(char);
    }
  }
  if (pushStack.length > 0) {
    return false;
  }
  return true;
};

console.log(isValid("]"));
