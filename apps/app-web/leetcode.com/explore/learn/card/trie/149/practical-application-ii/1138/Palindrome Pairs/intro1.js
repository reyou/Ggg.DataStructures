/**
 * @param {string[]} words
 * @return {number[][]}
 */
let Trie = function() {
  this.node = {};
  this.arrayIndex = -1;
  this.word = "";
};
let buildTrie = function(words) {
  let trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let chars = word.split("").reverse();
    if (word == "") {
      chars = [""];
    }
    let node = trie.node;
    for (let j = 0; j < chars.length; j++) {
      if (node[chars[j]] === undefined) {
        node[chars[j]] = new Trie();
      }
      node = node[chars[j]];
    }
    node.arrayIndex = i;
    node.word = word;
  }
  return trie;
};
var findMatchings2 = function(node, word, results) {
  if (node.arrayIndex > -1) {
    if (results.indexOf(node.arrayIndex) == -1) {
      results.push(node.arrayIndex);
    }
  }
  if (word == "") {
    for (let key in node) {
      if (node[key].arrayIndex !== undefined) {
        findMatchings(node[key], word, results);
      }
    }
  }
  let chars = word.split("");
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    if (node[char] === undefined) {
      return results;
    }
    findMatchings(node[char], word.slice(i + 1), results);
  }
  return results;
};

var isPalindrome = function(word) {
  let chars = word.split("");
  let left = 0;
  let right = chars.length - 1;
  while (left < right) {
    if (chars[left] != chars[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
var palindromePairs = function(words) {
  let trie = buildTrie(words);
  let results = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let matchings = findMatchings(trie.node, word, []);
    if (trie.node[""]) {
      matchings.push(trie.node[""].arrayIndex);
    }
    for (let j = 0; j < matchings.length; j++) {
      let arrayIndex = matchings[j];
      let merged = word + words[arrayIndex];
      if (isPalindrome(merged)) {
        if (i != arrayIndex) {
          results.push([i, arrayIndex]);
        }
      }
    }
  }
  return results;
};

let input2 = ["abcd", "dcba", "lls", "s", "sssll"];
let input = ["a", "b", "c", "ab", "ac", "aa"];
let input3 = ["a", ""];
console.log(JSON.stringify(palindromePairs(input)));
