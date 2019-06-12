class Trie {
  constructor() {
    this.next = {};
    this.word = null;
    this.wordIndex = null;
    this.level = 0;
  }
}

const palindromePairs = function(words) {
  const trie = createTrieStartingFromLastCharacterInEachWord(words);
  const results = []; // pairs of indexes for each palindrome
  words.forEach((word, wordIndex) => {
    console.log("\n");
    console.log({
      function: "palindromePairs",
      word,
      wordIndex
    });
    let node = trie;
    addPotentialPalindrome(node, word, wordIndex, results); // checks for empty word ''
    console.log({
      function: "palindromePairs",
      word,
      results
    });
    for (let i = 0; i < word.length; i++) {
      if (!node.next[word[i]]) return;
      node = node.next[word[i]];
      console.log({
        function: "palindromePairs",
        word,
        "word[i]": word[i],
        "node.level": node.level,
        wordIndex
      });
      addPotentialPalindrome(node, word, wordIndex, results);
      console.log({
        function: "palindromePairs",
        word,
        "word[i]": word[i],
        results
      });
    }
    let remainingWords = findRemainingWords(node).filter(n => n !== node);
    remainingWords.forEach(node => {
      addPotentialPalindrome(node, word, wordIndex, results);
    });
  });
  return results;
};

const createTrieStartingFromLastCharacterInEachWord = words => {
  const trie = new Trie();
  words.forEach((word, index) => {
    let node = trie;
    let level = 1;
    for (let i = word.length - 1; i >= 0; i--) {
      // Create next pointer if not exists & move node to next pointer
      if (node.next[word[i]] === undefined) {
        node.next[word[i]] = new Trie();
      }
      node = node.next[word[i]];
      node.level = level;
      level++;
    }
    node.word = word;
    node.wordIndex = index;
  });
  return trie;
};

const addPotentialPalindrome = (node, word, wordIndex, results) => {
  console.log({
    function: "addPotentialPalindrome",
    node,
    nodeLevel: node.level,
    nodeIndex: node.wordIndex,
    nodeWord: node.word,
    wordIndex
  });
  if (nodeMakesAPalindromeWithWord(node, word, wordIndex))
    results.push([wordIndex, node.wordIndex]);
};

const nodeMakesAPalindromeWithWord = (node, word, wordIndex) => {
  console.log({
    function: "nodeMakesAPalindromeWithWord",
    node,
    word,
    nodeLevel: node.level,
    nodeIndex: node.wordIndex,
    nodeWord: node.word,
    wordIndex
  });
  if (node && (node.word || node.word === "") && wordIndex !== node.wordIndex) {
    if (word.length >= node.word.length) {
      return wordIsPalindrome(word.slice(node.word.length, word.length));
    } else {
      return wordIsPalindrome(
        node.word.slice(0, node.word.length - word.length)
      );
    }
  } else {
    console.log({
      function: "nodeMakesAPalindromeWithWord",
      message: "not passed the validation",
      "node.word": node.word,
      wordIndex,
      "node.wordIndex": node.wordIndex
    });
  }
  return false;
};

const wordIsPalindrome = word => {
  console.log({
    function: "wordIsPalindrome",
    word
  });
  const half = Math.floor(word.length / 2);
  for (let i = 0; i < half; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const findRemainingWords = (node, results = []) => {
  if (!node) return results;
  if (node.word) results.push(node);
  for (let k in node.next) {
    findRemainingWords(node.next[k], results);
  }
  return results;
};
let input = ["abcd", "dcba", "lls", "s", "sssll"];
let input2 = ["a", "b", "c", "ab", "ac", "aa"];
let input3 = ["a", ""];
console.log(JSON.stringify(palindromePairs(input)));
