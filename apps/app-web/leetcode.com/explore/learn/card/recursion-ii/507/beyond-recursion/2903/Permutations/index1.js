/*Given a collection of distinct integers, 
return all possible permutations. */
/*Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
] */

var permute = function(nums) {
  let res = [];
  permutation(nums, 0, nums.length - 1, res);
  return res;
};

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return arr;
}

function permutation(arr, pos, n, res) {
  if (pos === n) {
    res.push(arr.slice());
  } else {
    for (let x = pos; x <= n; x++) {
      swap(arr, pos, x);
      permutation(arr, pos + 1, n, res);
      swap(arr, pos, x);
    }
  }
}

console.log(JSON.stringify(permute([1, 2, 3])));
