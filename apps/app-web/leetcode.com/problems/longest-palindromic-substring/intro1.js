/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = left + 1;
    let longest = resolve(s, left, right, "");
    if (longest.length > result.length) {
      result = longest;
    }
  }
  return result;
};

function resolve(word, left, right, longest) {
  if (left >= right || left < 0 || right > word.length) {
    return longest;
  }
  let buffer = word.slice(left, right);
  if (isPalindrome(buffer)) {
    if (buffer.length > longest.length) {
      longest = buffer;
    }
    let rightExpand = resolve(word, left, right + 1, longest);
    let centerExpand = resolve(word, left - 1, right + 1, longest);
    if (rightExpand.length > centerExpand.length) {
      return rightExpand;
    }
    return centerExpand;
  }
  return longest;
}

function isPalindrome(word) {
  return (
    word ===
    word
      .split("")
      .reverse()
      .join("")
  );
}
console.log(
  longestPalindrome(
    "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa"
  )
);
