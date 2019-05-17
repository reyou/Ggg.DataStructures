// fill the array with all evens (2, 4, 6 ..)

function getRandom(min, max) {
  var random = Math.floor(Math.random() * (+max - +min)) + +min;
  return random;
}

function fillArray(n) {
  let arr = [];
  resolve(arr, n);
  return arr;
}

function resolve(arr, n) {
  // base case
  if (arr.length == n) {
    return true;
  }
  let number = getRandom(0, 10);
  if (number % 2 == 0) {
    arr.push(number);
  }
  // retry
  return resolve(arr, n);
}

// fill array with 10 random even numbers
let result = fillArray(10);
console.log(result);
