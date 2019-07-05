var ladderLength = function(beginWord, endWord, wordList) {
  // insert endWord into list if not exists
  // create empty queue
  // start from beginWord and generate all existing combinations
  // insert into queue if in wordList
  // compare queue item with endWord
  if (wordList.indexOf(endWord) === -1) {
    return 0;
  }
  let queue = [];
  queue.push({
    word: beginWord,
    distance: 1
  });
  while (queue.length > 0) {
    let wordItem = queue.shift();
    let word = wordItem.word;
    if (word === endWord) {
      return wordItem.distance;
    }
    let aCharCode = "a".charCodeAt(0);
    let zCharCode = "z".charCodeAt(0);
    let wordArr = word.split("");
    for (let i = 0; i < wordArr.length; i++) {
      let temp = wordArr[i];
      for (let c = aCharCode; c <= zCharCode; c++) {
        let char = String.fromCharCode(c);
        if (temp != char) {
          wordArr[i] = char;
        }
        let newWord = wordArr.join("");
        if (wordList.indexOf(newWord) > -1) {
          queue.push({
            word: newWord,
            distance: wordItem.distance + 1
          });
          let indexToRemove = wordList.indexOf(newWord);
          wordList.splice(indexToRemove, 1);
        }
      }
      wordArr[i] = temp;
    }
  }
  return 0;
};

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
test2();
test3();
test4();
