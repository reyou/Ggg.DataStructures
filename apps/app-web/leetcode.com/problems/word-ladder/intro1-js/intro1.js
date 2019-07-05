var ladderLength = function(beginWord, endWord, wordList) {
  let result = resolve(beginWord, endWord, wordList);
  return result;
};

function resolve(beginWord, endWord, wordList) {
  return 0;
}

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log"];
console.log(ladderLength(beginWord, endWord, wordList));
