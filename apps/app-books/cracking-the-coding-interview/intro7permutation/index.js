/*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 */
// This code counts all permutations of a string.
function permutation(str) {
  permutation2(str, "");
}

function permutation2(str, prefix) {
  if (str.length == 0) {
    console.log(prefix);
  } else {
    for (var i = 0; i < str.length; i++) {
      var rem = str.substring(0, i) + str.substring(i + 1);
      permutation2(rem, prefix + str[i]);
    }
  }
}

console.log(permutation("abcd"));
