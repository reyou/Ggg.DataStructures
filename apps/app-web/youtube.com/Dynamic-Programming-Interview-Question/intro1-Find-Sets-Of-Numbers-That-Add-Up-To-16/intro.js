/*
 * https://www.w3schools.com/jsref/jsref_concat_array.asp
 * https://www.w3schools.com/jsref/jsref_slice_array.asp
 * https://davidwalsh.name/javascript-clone-array
 */
function printSubsets(arr, target) {
  printSubsets2(arr, target, [], arr);
}
function printSubsets2(arr, target, subset, rem) {
  if (isTarget(subset, target)) {
    console.log(subset);
  }
  if (rem.length == 0) {
    return;
  }
  for (let i = 0; i < rem.length; i++) {
    let rem2 = rem.slice(i + 1);
    let subset2 = subset.concat(rem[i]);
    printSubsets2(arr, target, subset2, rem2);
  }
}
function isTarget(arr, target) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total == target;
}
let arr = [2, 4, 6, 10];
printSubsets(arr, 16);
