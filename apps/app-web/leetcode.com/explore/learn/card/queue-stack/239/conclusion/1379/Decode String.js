/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = s.split("");
  let stack2 = [];
  while (stack.length > 0) {
    let item = stack.pop();
    if (item === "[") {
      let count = "";
      while (stack.length > 0) {
        let countItem = stack.pop();
        if (isNaN(countItem)) {
          stack.push(countItem);
          break;
        } else {
          count = countItem + count;
        }
      }
      count = parseInt(count);
      let sub = "";
      while (stack2.length > 0) {
        let subItem = stack2.pop();
        if (subItem == "]") {
          for (let i = 0; i < count; i++) {
            let subArr = sub.split("");
            while (subArr.length > 0) {
              stack2.push(subArr.pop());
            }
          }
          break;
        } else {
          sub += subItem;
        }
      }
    } else {
      stack2.push(item);
    }
  }
  return stack2.reverse().join("");
};

console.log(decodeString("100[leetcode]"));
console.log("\n");
console.log(decodeString("3[a2[c]]"));
console.log("\n");
