/**
 * @param {Array<number>} A
 * @return {Array<Array<number>>}
 */
const threeSum = (A) => {
  // sorting
  // [-3, -1, 1, 0, 2, 10, -2, 8]
  //  [-3, -2, -1, 0, 1, 2, 8, 10]
  // for each element
  // pick one element -3
  // pick second
  // pick third
  // assert if no duplicate
  // assert if total is zero
  let items = [];
  let builder = [];
  threeSumInternal(A, builder, A, items);
  return items;
};

// [-2, -1, 3, 0, 1, -1]
// [-5, 3, 2, 0, 1, -1, -5, 3, 2]
function threeSumInternal(input, builder, remaining, items) {
  // base case
  if (builder.length === 3) {
    let total = 0;
    for (let i = 0; i < builder.length; i++) {
      total += builder[i];
    }
    if (total === 0) {
      items.push(builder);
    }
    builder = [];
  }

  // recurse
  for (let i = 0; i < remaining.length; i++) {
    let number = remaining[i];
    builder.push(number);
    let remaining2 = input.slice(0, i).concat(input.slice(i + 1));
    threeSumInternal(input, builder, remaining2, items);
  }

  return items;
}

let result = threeSum([-3, -1, 1, 0, 2, 10, -2, 8]);
console.log(JSON.stringify(result));
