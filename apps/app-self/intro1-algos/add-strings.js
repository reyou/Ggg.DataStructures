const addStrings = (s1, s2) => {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let result = '';
  let carry = 0;
  while (arr1.length > 0 || arr2.length > 0) {
    let num1 = 0,
      num2 = 0;
    if (arr1.length > 0) num1 = parseInt(arr1.pop());
    if (arr2.length > 0) num2 = parseInt(arr2.pop());

    let total = num1 + num2 + carry;

    carry = 0;

    if (total > 9) {
      total = total % 10;
      carry = 1;
    }

    result += total;
  }

  if (carry > 0) {
    result += carry;
  }

  return result.split('').reverse().join('');
};

// console.log(addStrings('0', '11'));
console.log(addStrings('8548745648945456', '21314648312465456485245'));
// console.log(8548745648945456 + 21314648312465456485245);

// split string into queue
// 951 -> 9, 5, 1
// 7 -> 7
// pop each from queue, and multiply counter * 10 on each iteration
// this will give decimal value
// use this as sub result.

// Test cases
