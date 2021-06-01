/**
 * @param {Array<number>} arr
 * @param {number} k
 * @return {number}
 */
// [3, 7, -4, -2, 1, 5] k = 3
// [3, 7, -4, -2, 1, 5] [0,0]
// [3, 7, -4, -2, 1, 5] [1,2]
const countSubarrays = (arr, k) => {
  // while we reach end state
  // can I break up smaller problem?
  // we have left,right boundries
  // approach from left right
  // when left pointer = arr.length  stop
  let left = 0;
  let right = 0;
  let count = 0;
  while (left < arr.length) {
    let subTotal = 0;
    let visitor = left;
    while (visitor <= right) {
      subTotal += arr[visitor];
      visitor++;
    }
    if (subTotal === k) {
      count++;
    }
    right++;
    if (right === arr.length) {
      left++;
      right = left;
    }
  }
  return count;
};

let result = countSubarrays([1, 0, -1, 1], 0);
console.log(result);
