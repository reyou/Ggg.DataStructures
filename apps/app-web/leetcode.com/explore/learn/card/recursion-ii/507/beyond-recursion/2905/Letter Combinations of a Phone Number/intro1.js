let mapping = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};
var letterCombinations = function(digits) {
  if (digits == null || digits == "") {
    return [];
  }
  let digitArray = digits.split("");
  let numbers = [];
  for (let i = 0; i < digitArray.length; i++) {
    numbers.push(mapping[digitArray[i]]);
  }
  let arrayCounter = 0;
  let result = [];
  let buffer = "";
  resolve(numbers, arrayCounter, buffer, result);
  return result;
};

function resolve(numbers, arrayCounter, buffer, result) {
  if (buffer.length == numbers.length) {
    result.push(buffer);
    return;
  }
  for (let i = 0; i < numbers[arrayCounter].length; i++) {
    let selected = buffer;
    selected += numbers[arrayCounter][i];
    resolve(numbers, arrayCounter + 1, selected, result);
  }
}

console.log(JSON.stringify(letterCombinations("23")));
