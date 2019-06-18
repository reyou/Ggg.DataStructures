/*We left by advancing the right pointer. 
If the current character in s at the right index exists in our map, 
we decrement the count of our unmatched characters. 
Next we decrement the count for that character in our map and advance our right pointer.

When the unmatched character count reaches zero, 
we know that all characters in t have been matched. 
If the window is shorter than our current minimum window, we update it. 
Next we try to shorten our window by advancing the left pointer. 
When we lose a character in t by advancing the left pointer, 
we terminate as we can no longer decrease the size of the window.

The above repeats until the right pointer reaches the right of s. 
If the minimum length of the window has not changed since initialization, 
we know that no window exists and return an empty string, 
otherwise we return the minimum window.
 */
var minWindow = function(s, t) {
  let charCount = t.length;
  let left = 0;
  let right = 0;
  let minStartIndex = 0;
  let minLength = Number.MAX_VALUE;

  // create a map of each char in t to its number of occurrences
  let hash = {};
  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]] === undefined) {
      hash[t[i]] = 1;
    } else {
      hash[t[i]] += 1;
    }
  }

  while (right < s.length) {
    const currChar = s[right];

    if (hash[currChar] > 0) {
      charCount--;
    }

    // decrease the count for the char and advance the right pointer
    hash[currChar]--;
    right++;

    // when count reaches zero, all chars in t have been matched
    while (charCount === 0) {
      // update the minimum window's start position and length
      if (right - left < minLength) {
        minLength = right - left;
        minStartIndex = left;
      }

      // since we will advance the left pointer and lose
      // a char, the char count needs to be incremented
      hash[s[left]]++;

      // if the char at the left pointer existed in t
      // the window has lost a char in t
      if (hash[s[left]] > 0) {
        charCount++;
      }

      // minimize the window by advancing the start pointer
      left++;
    }
  }

  return minLength === Number.MAX_VALUE
    ? ""
    : s.substr(minStartIndex, minLength);
};
let input1 = ["ADOBECODEBANC", "ABC"];
let input2 = ["ab", "a"];
let input3 = ["aa", "aa"];
let input4 = ["aa", "aaa"];
let input5 = ["bbaac", "aba"];
let input6 = ["aaflslflsldkalskaaa", "aaa"];
let result = minWindow(input1[0], input1[1]);
console.log(JSON.stringify(result));
