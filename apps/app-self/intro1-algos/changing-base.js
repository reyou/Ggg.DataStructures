const changeBase = (numAsString, b1, b2) => {
  // baseX -> base10 -> baseY (string)
  // convert string to base 10 int
  let base10 = convertToBase10(numAsString, b1);

  // get target base of int
  let baseTarget = convertToBaseTarget(base10, b2);

  return baseTarget;
};

function convertToBase10(input, base) {
  if (base === 10) return parseInt(input);

  let result = 0;
  // 1,2,3
  let charArr = input.split('');
  let multiplier = 1;
  for (let i = charArr.length - 1; i >= 0; i--) {
    if (charArr[i] < 10) {
      result += parseInt(charArr[i]) * multiplier;
    } else {
      result += parseInt(charArr[i], base) * multiplier;
    }
    multiplier *= base;
  }

  return result;
}

function convertToBaseTarget(input, base) {
  let result = '';

  while (input > 0) {
    let reminder = input % base;
    if (reminder > 9) {
      reminder = String.fromCharCode('A'.charCodeAt(0) + reminder - 10);
    }
    input = Math.floor(input / base);
    result += reminder;
  }

  // reverse for correct result
  return result.split('').reverse().join('');
}

// console.log(changeBase('3456217', 2, 9));
console.log(changeBase('1AB', 16, 12));

// Test cases
/*
  Input: ("12", 10, 2)
  Output: "1100" 
  */
/*
  Input: ("123", 4, 10)
  Output: "27"
  */
/*
  Input: ("123", 4, 16)
  Output: "1B"
  */
