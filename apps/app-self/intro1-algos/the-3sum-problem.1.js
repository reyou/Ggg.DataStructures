/**
 * @param {Array<number>} A
 * @return {Array<Array<number>>}
 */
const threeSum = (A) => {
  // [-3, -1, 1, 0, 2, 10, -2, 8]
  // sort
  // [-3, -2, -1, 1, 0, 2, 8, 10]
  // [-20 ,-3, -2, -1, 1, 0, 2, 8, 10]
  // left, middle, right pointers
  // for each left
  // if l + m + r is zero then add it into result
  // if less than 0 then increase middle
  // if more than 0 then decrease right
  // if middle and prev are same iterate to right
  // if right and next are same iterate to left
  A = A.sort((a, b) => a - b);
  let result = [];
  for (let left = 0; left < A.length - 2; left++) {
    if (A[left] > 0) {
      return result;
    }

    if (left > 0 && A[left] == A[left + 1]) {
      continue;
    }

    let middle = left + 1;
    let right = A.length - 1;
    while (middle < right) {
      let total = A[left] + A[middle] + A[right];
      if (total === 0) {
        result.push([A[left], A[middle], A[right]]);
        middle++;
        right--;
        while (middle < right && A[middle] === A[middle - 1]) {
          middle++;
        }
        while (right > middle && A[right] === A[right + 1]) {
          right--;
        }
      } else if (total < 0) {
        middle++;
      } else {
        right--;
      }
    }
  }

  return result;
};

let result = threeSum([
  0, 2, 0, 2, 0, 0, 3, 1, -3, 3, 0, -3, 2, 2, -1, 4, 2, -4, 3, 0, -4, 2, 2, -3,
  1, 4, 0, 3, 1, -2, 1, 3, -4, 4, 2, -4, 4, 0, -3, 2
]);

console.log(JSON.stringify(result));
