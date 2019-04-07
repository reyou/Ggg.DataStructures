/**
 * @param {string[]} tokens
 * @return {number}
 */
let operators = {
  "+": function add(a, b) {
    return a + b;
  },
  "-": function sub(a, b) {
    return a - b;
  },
  "*": function mul(a, b) {
    return a * b;
  },
  "/": function div(a, b) {
    let result = a / b;
    if (result < 0) {
      return Math.ceil(result);
    } else return Math.floor(result);
  }
};
var evalRPN = function(tokens) {
  let result = 0;
  let stack1 = [];
  while (tokens.length > 0) {
    let item = tokens.shift();
    if (operators[item]) {
      let b = parseInt(stack1.pop());
      let a = parseInt(stack1.pop());
      result = operators[item](a, b);
      stack1.push(result);
    } else {
      stack1.push(item);
    }
  }
  return stack1.pop();
};

let result = evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]);
console.log(result);
