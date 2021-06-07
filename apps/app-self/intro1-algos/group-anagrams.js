/**
 * @param {Array<string>} words
 * @return {Array<Array<string>>}
 */
const groupAnagrams = (words) => {
  let hash = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let sorted = word.split('').sort().join('');

    if (hash[sorted]) {
      hash[sorted].push(word);
    } else {
      hash[sorted] = [word];
    }
  }
  let result = [];
  for (let key in hash) {
    let anagrams = hash[key];
    result[result.length] = anagrams;
  }

  return result;
};
console.log(groupAnagrams(['eat', 'bat', 'ate', 'tab', 'tea', 'eat']));
