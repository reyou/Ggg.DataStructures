/**
 * @param {number} input
 * @return {number}
 */
// 10 -> 1010 -> 0101 -> 5
// 9090 -> 10001110000010 -> 01000001110001
const reverseBits = (input) => {
  // convert decimal to binary
  // divide until we have result = 0
  // append remaining to binary number
  // 5 / 2 = 2 remaining = 1
  // 2 / 2 = 1 remaining = 0
  // 1 / 2 = 0 remaining = 1

  // 4 / 2 = 2 remaining = 0
  // 2 / 2 = 1 remaining = 0
  // 1 / 2 = 0 remaining = 1
  let binary = decimalToBinary(input);
  // [1, 0, 1]
  // reverse binary
  // convert binary to decimal
  let decimal = binaryToDecimal(binary);

  return decimal;
};

// [0, 0, 1] = 4 (reverse)
function binaryToDecimal(binary) {
  let result = 0;
  let multiplier = 1;
  for (let i = binary.length - 1; i >= 0; i--) {
    result += binary[i] * multiplier;
    multiplier *= 2;
  }

  return result;
}

function decimalToBinary(input) {
  // 0
  let result = [];
  while (true) {
    let division = Math.floor(input / 2);
    let remaining = input % 2;
    result.push(remaining);
    if (division === 0) {
      return result;
    }
    input = division;
  }
}

// console.log(reverseBits(0));
// console.log(reverseBits(1));
console.log(reverseBits(9090));
