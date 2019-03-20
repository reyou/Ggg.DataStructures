/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

var openLock = function(deadends, target) {
  return -1;
};

let deadends = ["0201", "0101", "0102", "1212", "2002"];
let target = "0202";
let count = openLock(deadends, target);
console.log(count);
