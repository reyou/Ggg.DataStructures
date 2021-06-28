/**
 * @param {Array<number>} A
 * @return {number}
 */
const maximumPairwiseXOR = (A) => {
  let result = resolve(A, [], 0);
  return result;
};

function resolve(array, builder, left) {
  if (builder.length === 2) {
    return builder[0] ^ builder[1];
  }
  let max = 0;
  for (let i = left; i < array.length; i++) {
    builder.push(array[i]);
    let result = resolve(array, builder, left + 1);
    max = Math.max(max, result);
    builder.pop();
  }
  return max;
}
