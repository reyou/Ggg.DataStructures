/**
 * @param {Array<string>} words
 * @param {string} pattern
 * @return {Array<string>}
 */
const findAndReplacePattern = (words, pattern) => {
  let results = [];
  let patternArr = pattern.split('');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordArr = word.split('');
    let charArr = [];
    for (let q = 0; q <= 256; q++) {
      charArr[q] = 0;
    }

    let match = true;
    for (let j = 0; j < patternArr.length; j++) {
      if (charArr[patternArr[j].charCodeAt(0)] === 0) {
        charArr[patternArr[j].charCodeAt(0)] = wordArr[j];
      } else if (charArr[patternArr[j].charCodeAt(0)] !== wordArr[j]) {
        match = false;
      }
    }
    if (match) {
      results.push(word);
    }
  }
  return results;
};
console.log(JSON.stringify(findAndReplacePattern(['xx', 'yy', 'ka'], 'ba')));
return;
console.log(JSON.stringify(findAndReplacePattern(['bc', 'cd', 'df'], 'ac')));
console.log(
  JSON.stringify(findAndReplacePattern(['abc', 'cde', 'zzz'], 'aaa'))
);
console.log(JSON.stringify(findAndReplacePattern(['xx', 'yy', 'ka'], 'ba')));
