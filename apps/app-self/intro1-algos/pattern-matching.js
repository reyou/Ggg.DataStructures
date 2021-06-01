/**
 * @param {Array<string>} words
 * @param {string} pattern
 * @return {Array<string>}
 */
const findAndReplacePattern = (words, pattern) => {
  // we have words (set of strings)
  // pattern -> cc
  /*
    pattern = "cc" -> aa, bb, xx
    pattern = "ghg" -> bcb
    */
  // assert same length
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length == pattern.length) {
      let hashPattern = {};
      let patternArr = pattern.split('');
      let wordArr = word.split('');
      let match = true;
      for (let j = 0; j < patternArr.length; j++) {
        if (hashPattern[patternArr[j]]) {
          if (hashPattern[patternArr[j]] !== wordArr[j]) {
            match = false;
            break;
          }
        } else {
          if (hashPattern[wordArr[j]]) {
            match = false;
            break;
          }

          hashPattern[patternArr[j]] = wordArr[j];
          hashPattern[wordArr[j]] = patternArr[j];
        }
      }
      if (match) {
        result.push(word);
      }
    }
  }
  return result;
};

console.log(JSON.stringify(findAndReplacePattern(['bc', 'cd', 'df'], 'ac')));
console.log(
  JSON.stringify(findAndReplacePattern(['abc', 'cde', 'zzz'], 'aaa'))
);
console.log(JSON.stringify(findAndReplacePattern(['xx', 'yy', 'ka'], 'ba')));
