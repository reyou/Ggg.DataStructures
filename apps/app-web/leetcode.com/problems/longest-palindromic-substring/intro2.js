var longestPalindrome = function(inputString) {
  let result = "";
  for (let left = 0; left < inputString.length; left++) {
    let right = left;
    let borders = resolve(inputString, left, right, "");
    if (borders.right - borders.left > result.length) {
      result = inputString.slice(borders.left, borders.right);
    }
  }
  return result;
};

function isPalindrome(inputString, left, right) {
  let subString = inputString.slice(left, right);
  return (
    subString ===
    subString
      .split("")
      .reverse()
      .join("")
  );
}

function resolve(inputString, left, right, step) {
  if (inputString.length < 2) {
    return {
      left,
      right: right + 1
    };
  }
  if (
    left < 0 ||
    right >= inputString.length ||
    inputString[left] !== inputString[right] ||
    !isPalindrome(inputString, left, right)
  ) {
    if (step === "right") {
      return {
        left,
        right: right
      };
    } else {
      return {
        left: left + 1,
        right: right
      };
    }
  }

  // expand to right
  let rightResult = resolve(inputString, left, right + 1, "right");
  // expand from center
  let centerResult = resolve(inputString, left - 1, right + 1, "center");

  if (
    rightResult.right - rightResult.left >
    centerResult.right - centerResult.left
  ) {
    return {
      left: rightResult.left,
      right: rightResult.right
    };
  } else {
    return {
      left: centerResult.left,
      right: centerResult.right
    };
  }
}

// bab
console.log(longestPalindrome("aaabaaaa"));
