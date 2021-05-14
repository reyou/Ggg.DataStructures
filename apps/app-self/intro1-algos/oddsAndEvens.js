let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let input2 = [2, 4, 6, 8, 1, 6, 9];
let input3 = [1, 2];

function balanceArray(input) {
  // expected
  // 2,4,6,8|,1,3,5,7,9
  // have 2 pointer, one for evens/left one for odds/right
  // approach from left and right
  // swap items until you meet criteria
  // until they meet each other
  let evenP = 0;
  let oddP = input.length - 1;
  while (evenP < oddP) {
    let evenVal = input[evenP];
    let oddVal = input[oddP];
    if (evenVal % 2 === 0) {
      evenP++;
    } else {
      if (oddVal % 2 === 0) {
        input[oddP] = evenVal;
        input[evenP] = oddVal;
        evenP++;
      } else {
        oddP--;
      }
    }
  }
  console.log(input);
}

balanceArray(input1);
balanceArray(input2);
balanceArray(input3);
