function canHop(arr) {
  if (arr[0] >= arr.length) {
    return true;
  }
  if (arr[0] == 0) {
    return false;
  }
  for (let i = 0; i < arr[0]; i++) {
    let subArr = arr.slice(i + 1);
    let done = canHop(subArr);
    if (done) {
      return true;
    }
  }
  return false;
}

console.log(canHop([4, 2, 0, 0, 2, 0]));
console.log(canHop([1, 0]));
console.log(canHop([1, 1]));
console.log(canHop([0]));
console.log(canHop([3, 0, 0, 1, 2, 0, 2, 0]));
