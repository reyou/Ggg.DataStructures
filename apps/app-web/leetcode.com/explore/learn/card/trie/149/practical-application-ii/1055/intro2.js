let Trie = class {
  constructor() {
    this.child = [];
    this.starts = [];
  }
};
function buildTrie(trie, words) {
  for (let i = 0; i < words.length; ++i) {
    let word = words[i];
    let cur = trie;
    //store words in trie
    for (let j = 0; j < words[0].length; ++j) {
      let idx = word.charCodeAt(j) - "a".charCodeAt(0);
      if (cur.child[idx] == null) {
        cur.child[idx] = new Trie();
      }
      cur.starts.push(word);
      cur = cur.child[idx];
    }
  }
}
var wordSquares = function(words) {
  let trie = new Trie();
  let results = [];
  buildTrie(trie, words);
  let current = [];
  generate(results, current, trie, 0, words[0].length, words);
  return results;
};

var generate = function(res, cur, trie, row, wordLength, words) {
  if (row >= wordLength) {
    res.push(cur.slice());
    return;
  }
  //make sure theres a word that exists
  // in the trie comparing each row's
  // index return if there isn't
  let current = trie;
  for (let j = 0; j < row; j++) {
    let idx = cur[j].charCodeAt(row) - "a".charCodeAt(0);
    if (current.child[idx] == null) {
      return;
    }
    current = current.child[idx];
  }
  for (let i = 0; i < current.starts.length; i++) {
    let next = current.starts[i];
    cur.push(next);
    generate(res, cur, trie, row + 1, wordLength, words);
    cur.pop();
  }
};

let input = ["area", "lead", "wall", "lady", "ball"];
console.log(JSON.stringify(wordSquares(input)));
