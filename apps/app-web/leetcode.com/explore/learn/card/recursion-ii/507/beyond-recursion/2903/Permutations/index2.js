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
  permutation(nums, 0, res);
  return res;
};

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return arr;
}

function permutation(inputArray, pointer, results) {
  if (pointer === inputArray.length - 1) {
    results.push(inputArray.slice());
  } else {
    for (
      let arrayCounter = pointer;
      arrayCounter < inputArray.length;
      arrayCounter++
    ) {
      swap(inputArray, arrayCounter, pointer);
      permutation(inputArray, pointer + 1, results);
      swap(inputArray, arrayCounter, pointer);
    }
  }
}

console.log(JSON.stringify(permute([1, 2, 3])));
