//  dynamic programming
//  palindromic
// 1- first letter == last letter
// 2- inner also palindromic [abba] [bbb] [racecar]
// "aaabaaaa"
var longestPalindrome = function(inputString) {
  let length = inputString.length;
  if (inputString == null || length < 2) {
    return inputString;
  }
  // dynamic programming cache
  // for marking ranges of palindromic strings
  let cacheMatrix = [];
  for (let i = 0; i < length; i++) {
    cacheMatrix[i] = [];
  }
  let left = 0;
  let right = 0;

  for (let rightPointer = 1; rightPointer < length; rightPointer++) {
    for (let leftPointer = 0; leftPointer < rightPointer; leftPointer++) {
      let isInnerWordPalindrome =
        cacheMatrix[leftPointer + 1][rightPointer - 1] ||
        rightPointer - leftPointer <= 2;

      if (
        inputString[leftPointer] === inputString[rightPointer] &&
        isInnerWordPalindrome
      ) {
        cacheMatrix[leftPointer][rightPointer] = true;
        if (rightPointer - leftPointer > right - left) {
          right = rightPointer;
          left = leftPointer;
        }
      }
    }
  }
  return inputString.slice(left, right + 1);
};
// bab
console.log(longestPalindrome("aaabaaaa"));
