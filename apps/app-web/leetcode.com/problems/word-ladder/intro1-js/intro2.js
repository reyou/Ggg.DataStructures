var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList.length === 0) {
    return 0;
  }
  let result = Number.MAX_VALUE;
  for (let i = 0; i < wordList.length; i++) {
    if (getDiff(beginWord, wordList[i]) === 1) {
      let resolved = resolve(wordList[i], endWord, wordList, i + 1, 1);
      if (resolved == 0) {
        resolved = Number.MAX_VALUE;
      }
      if (wordList.indexOf(beginWord) > -1) {
        resolved -= 1;
      }
      result = Math.min(result, resolved);
    }
  }
  if (result === Number.MAX_VALUE) {
    return 0;
  }
  return result;
};

function getDiff(word1, word2) {
  let left = 0;
  let diff = 0;
  while (left < word1.length) {
    if (word1[left] != word2[left]) {
      diff++;
    }
    left++;
  }
  return diff;
}

function resolve(beginWord, endWord, wordList, counter, depth) {
  if (getDiff(beginWord, endWord) === 1) {
    if (wordList.indexOf(endWord) > -1) {
      return 2;
    }
  }
  let result = 0;
  for (let i = counter; i < wordList.length; i++) {
    let current = wordList[i];
    if (getDiff(beginWord, current) === 1) {
      let resolved = resolve(
        current,
        endWord,
        wordList,
        counter + 1,
        depth + 1
      );
      if (resolved > 0) {
        result =
          depth + resolve(current, endWord, wordList, counter + 1, depth + 1);
      }
    }
  }

  return result;
}

// 5
function test1() {
  let beginWord = "hit";
  let endWord = "cog";
  let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  // "hit" -> "hot" -> "dot" -> "dog" -> "cog"
  console.log(ladderLength(beginWord, endWord, wordList));
}
// 0
function test2() {
  let beginWord = "hit";
  let endWord = "cog";
  let wordList = ["hot", "dot", "dog", "lot", "log"];
  console.log(ladderLength(beginWord, endWord, wordList));
}
// 2
function test3() {
  let beginWord = "a";
  let endWord = "c";
  let wordList = ["a", "b", "c"];
  console.log(ladderLength(beginWord, endWord, wordList));
}
// 3
function test4() {
  let beginWord = "hot";
  let endWord = "dog";
  let wordList = ["hot", "dog", "dot"];
  console.log(ladderLength(beginWord, endWord, wordList));
}
test1();
//test2();
//test3();
//test4();
