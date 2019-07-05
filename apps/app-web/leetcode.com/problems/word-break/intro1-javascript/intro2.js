/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let Trie = function() {
  this.hashMap = {};
  this.word = "";
};
function buildTrie(trie, wordDict) {
  for (let i = 0; i < wordDict.length; i++) {
    let word = wordDict[i];
    addToTrie(trie, word);
  }
}

function addToTrie(trie, word) {
  let chars = word.split("");
  let hashMap = trie.hashMap;
  for (let i = 0; i < chars.length; i++) {
    if (hashMap[chars[i]] === undefined) {
      hashMap[chars[i]] = new Trie();
    }
    hashMap = hashMap[chars[i]];
  }
  hashMap.word = word;
}

var wordBreak = function(s, wordDict) {
  let trie = new Trie();
  buildTrie(trie, wordDict);
  let result = resolve(s, trie, wordDict);
  return result;
};

function searchTrie(word, hashMap) {
  if (word == "") {
    return word;
  }
  let wordArr = word.split("");
  let char = wordArr[0];
  if (hashMap[char] === undefined) {
    return word;
  }
  wordArr = wordArr.slice(1);
  let subStr = wordArr.join("");
  let foundNode = hashMap[char];
  return searchTrie(subStr, foundNode);
}

function resolve(str, trie, wordDict) {
  let remaining = searchTrie(str, trie.hashMap);
  let foundWord = str.substring(0, str.length - remaining.length);
  if (foundWord == str && remaining == "") {
    return true;
  }
  if (wordDict.indexOf(foundWord) == -1) {
    return false;
  }

  if (remaining === str) {
    return false;
  }
  if (remaining === "") {
    return true;
  }
  return resolve(remaining, trie, wordDict);
}

function test1() {
  let s = "applepenapple";
  let wordDict = ["apple", "pen"];
  let result = wordBreak(s, wordDict);
  console.log(result);
}

function test2() {
  let s = "aaaaaaa";
  let wordDict = ["aaaa", "aaa"];
  let result = wordBreak(s, wordDict);
  console.log(result);
}

function test3() {
  let s = "aaaaaaa";
  let wordDict = ["aaaa", "aa"];
  let result = wordBreak(s, wordDict);
  console.log(result);
}

function test4() {
  let s = "bb";
  let wordDict = ["a", "b", "bbb", "bbbb"];
  let result = wordBreak(s, wordDict);
  console.log(result);
}

// test1(); // true
// test2(); // true;
test3(); // false
// test4(); // true
