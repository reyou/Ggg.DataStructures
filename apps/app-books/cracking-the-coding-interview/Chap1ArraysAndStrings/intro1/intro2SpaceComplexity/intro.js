/*Stack space in recursive calls counts, too. 
For example, code like this would takeO(n) time and O(n) space. */
function sum(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sum(n - 1);
}

console.log(sum(5));
