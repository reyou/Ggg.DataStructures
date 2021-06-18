/**
 * @param {Array<string>} A
 * @param {Array<string>} B
 * @return {Array<string>}
 */
// ['orange', 'room', 'more'], ['rm', 'oo']
const wordSubsets = (A, B) => {
  let result = [];
  // ["orange", "room", "more"]
  for (let w = 0; w < A.length; w++) {
    let matchFound = true;
    // ["rm", "oo"]
    for (let i = 0; i < B.length; i++) {
      if (!matchFound) {
        break;
      }
      // {r,o,o,m}
      let wordhash = getHash(A[w]);
      // rm
      let subset = B[i];
      // [r, m]
      let subsetChars = subset.split('');
      for (let s = 0; s < subsetChars.length; s++) {
        if (wordhash[subsetChars[s]] && wordhash[subsetChars[s]] > 0) {
          wordhash[subsetChars[s]] -= 1;
        } else {
          matchFound = false;
          break;
        }
      }
    }
    if (matchFound) {
      result.push(A[w]);
    }
  }
  return result;
};

function getHash(word) {
  let hash = {};
  let chars = word.split('');
  for (let i = 0; i < chars.length; i++) {
    if (hash[chars[i]]) {
      hash[chars[i]] += 1;
    } else {
      hash[chars[i]] = 1;
    }
  }
  return hash;
}

console.log(wordSubsets(['orange', 'room', 'more'], ['rm', 'oo']));
