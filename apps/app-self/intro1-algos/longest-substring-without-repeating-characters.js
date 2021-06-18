/**
 * @param {string} s
 * @return {number}
 */
const longestUniqueCharacterSubstring = (s) => {
  // divide to array
  // have a left pointer
  // have a visitor (from left to right)
  // track visitor how many it can go without duplicate
  // if duplicate occurs, note the longest length, increase left by one
  // assign visitor to left
  let arr = s.split('');
  let left = 0;
  let visitor = 0;
  let maxLength = 0;
  // [A]
  while (left < arr.length) {
    let hash = {};
    let uniqueLength = 0;
    while (visitor < arr.length) {
      if (hash[arr[visitor]]) {
        break;
      } else {
        // A,B,C,A,B,A,D,E,C
        hash[arr[visitor]] = true;
        uniqueLength++;
      }
      visitor++;
    }
    left++;
    visitor = left;
    maxLength = Math.max(maxLength, uniqueLength);
  }

  return maxLength;
};
