// fill the array with all unique evens (2, 4, 6 ..)
function getRandom(min, max) {
  var random = Math.floor(Math.random() * (+max - +min)) + +min;
  return random;
}

function canPush(arr, val) {
  if (val % 2 == 1) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return false;
    }
  }
  return true;
}

function fillArray(arr, n, maxTry) {
  return resolve(arr, n, maxTry);
}

function resolve(arr, n, maxTry) {
  // base case
  if (arr.length == n) {
    return maxTry;
  }
  if (maxTry == 0) {
    return 0;
  }
  let number = getRandom(0, 100);
  let isPush = canPush(arr, number);
  if (isPush) {
    arr.push(number);
    let remaining = resolve(arr, n, maxTry - 1);
    if (arr.length == n) {
      return remaining;
    }
  }
  // backtracking if recursion not working
  // and done with all remainings
  if (maxTry == 0) {
    maxTry = maxTry + 1;
  }
  // retry again
  return resolve(arr, n, maxTry - 1);
}

// fill array with 10 random even numbers
let arr = [];
let maxTry = 50;
let remaining = fillArray(arr, 10, maxTry);
console.log(JSON.stringify(arr));
console.log("remaining: " + remaining);
