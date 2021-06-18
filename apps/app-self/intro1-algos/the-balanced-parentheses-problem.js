/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (s === null || s.length === 0 || s.length % 2 !== 0) {
    return false;
  }

  let tokens = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  let chars = s.split('');
  let stack = [];
  for (let i = 0; i < chars.length; i++) {
    stack.push(chars[i]);
  }

  // 	["(){}[]"]
  // 	["({[]})"]
  let stackClosed = [];
  while (stack.length > 0) {
    let item = stack.pop();
    if (tokens[item] === undefined) {
      // open
      if (stackClosed.length === 0) {
        return false;
      }
      let closed = stackClosed.pop();
      if (tokens[closed] !== item) {
        return false;
      }
    } else {
      stackClosed.push(item);
    }
  }

  return true;
};
