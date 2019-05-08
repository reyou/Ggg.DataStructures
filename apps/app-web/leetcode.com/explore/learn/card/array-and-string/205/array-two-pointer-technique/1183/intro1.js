/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  resolve(s, 0);
};

function resolve(str, left) {
  if (left >= str.length / 2) {
    return;
  }
  swap(str, left, str.length - 1 - left);
  resolve(str, left + 1);
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
