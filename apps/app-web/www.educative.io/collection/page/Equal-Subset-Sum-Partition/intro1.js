let canPartition = function(num) {
  //TODO: Write - Your - Code

  let result = resolve(num, [], []);
  return result;
};

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function resolve(num, left, right) {
  if (left.length > 0 && right.length > 0) {
    if (sum(left) === sum(right)) {
      return true;
    }
  }
  for (let i = left.length; i < num.length; i++) {
    left.push(num[i]);
    right = num.slice(0, i).concat(num.slice(i + 1));
    let num2 = num.slice(0, i).concat(num.slice(i + 1));
    let result = resolve(num2, left, right);
    if (result) {
      return true;
    }
    left.pop();
    right.pop();
  }
  return false;
}
console.log(canPartition([1, 1, 3, 4, 7])); // true
console.log(canPartition([1, 2, 3, 4])); // true
console.log(canPartition([2, 3, 4, 6])); // false
