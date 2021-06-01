/**
 * @param {Array<string>} words
 * @param {string} pattern
 * @return {Array<string>}
 */
const findAndReplacePattern = (words, pattern) => {
  const matches = [];

  words.forEach((word) => {
    if (isAligned(word, pattern)) {
      matches.push(word);
    }
  });

  return matches;
};

const isAligned = (word, pattern) => {
  if (word.length != pattern.length) {
    return false;
  }

  // See https://www.ascii-code.com/ for ascii values
  const patternCharMap = Array(256).fill(0);
  const wordCharMap = Array(256).fill(0);

  // Every step we build a cross mapping and see if it breaks
  for (let i = 0; i < word.length; i++) {
    const wordCharCodeNumber = word.charAt(i).charCodeAt(0);
    const patternCharCodeNumber = pattern.charAt(i).charCodeAt(0);

    if (patternCharMap[wordCharCodeNumber] == 0) {
      patternCharMap[wordCharCodeNumber] = patternCharCodeNumber;
    }

    if (wordCharMap[patternCharCodeNumber] == 0) {
      wordCharMap[patternCharCodeNumber] = wordCharCodeNumber;
    }

    if (
      patternCharMap[wordCharCodeNumber] != patternCharCodeNumber ||
      wordCharMap[patternCharCodeNumber] != wordCharCodeNumber
    ) {
      return false;
    }
  }

  return true;
};
console.log(
  JSON.stringify(findAndReplacePattern(['abc', 'cde', 'zzz'], 'aaa'))
);
return;
console.log(JSON.stringify(findAndReplacePattern(['xx', 'yy', 'ka'], 'ba')));

console.log(JSON.stringify(findAndReplacePattern(['bc', 'cd', 'df'], 'ac')));
