/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let collection = [];
  let buffer = [];
  resolve(n, k, buffer, collection);
  return collection;
};

function canPlace(buffer, val, k) {
  if (buffer.length == k) {
    return false;
  }
  for (let i = 0; i < buffer.length; i++) {
    if (buffer[i] >= val) {
      return false;
    }
  }
  return true;
}

function resolve(n, k, buffer, collection) {
  if (buffer.length == k) {
    return;
  }
  for (let i = 1; i <= n; i++) {
    let isPlace = canPlace(buffer, i, k);
    if (isPlace) {
      buffer.push(i);
      resolve(n, k, buffer, collection);
      if (buffer.length == k) {
        collection.push(buffer.slice(0));
      }
      buffer.pop();
    }
  }
  return;
}

console.log(JSON.stringify(combine(4, 2)));
