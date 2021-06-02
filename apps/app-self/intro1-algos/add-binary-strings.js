/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
const addBinaryStrings = (s1, s2) => {
  // split number1 and number2 into stack
  // 101 -> [1, 0, 1]
  // 1 -> [1]
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let p1 = arr1.length - 1;
  let p2 = arr2.length - 1;
  let result = '';
  let overFlow = 0;
  while (p1 >= 0 || p2 >= 0) {
    let num1 = 0;
    let num2 = 0;
    if (p1 >= 0) {
      num1 = parseInt(arr1[p1]);
      p1--;
    }
    if (p2 >= 0) {
      num2 = parseInt(arr2[p2]);
      p2--;
    }

    let total = num1 + num2 + overFlow;
    overFlow = 0;
    if (total > 1) {
      overFlow = 1;
      result += total % 2;
    } else {
      result += total;
    }
  }
  if (overFlow > 0) {
    result += overFlow;
  }
  return result.split('').reverse().join('');
};
console.log(
  addBinaryStrings(
    '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
    '111111111111111111111111111111111111111111111111111111111111111111111111111111'
  )
);
return;
console.log(addBinaryStrings('101', '1'));
