/* 
Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
let Trie = function() {
  this.children = {};
};
var findWords = function(board, words) {
  let trie = buildTrie(words);
  let results = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      searchWord(trie.children, row, col, board, results, {});
    }
  }
  return results;
};

function searchWord(node, row, col, board, results, visited) {
  if (node === undefined) {
    return;
  }
  if (node.word) {
    results.push(node.word);
    node.word = null;
  }
  if (
    row < 0 ||
    col < 0 ||
    row > board.length - 1 ||
    col > board[0].length - 1
  ) {
    return;
  }
  if (visited[row + "-" + col] !== undefined) {
    return;
  }
  visited[row + "-" + col] = true;
  let char = board[row][col];
  // top
  searchWord(node[char], row - 1, col, results, visited);
  // right
  searchWord(node[char], row, col + 1, results, visited);
  // bottom
  searchWord(node[char], row + 1, col, results, visited);
  // left
  searchWord(node[char], row, col - 1, results, visited);
}

function buildTrie(words) {
  let trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    insertToTrie(trie, word);
  }
  return trie;
}

function insertToTrie(trie, word) {
  let chars = word.split("");
  let node = trie;
  for (let i = 0; i < chars.length; i++) {
    if (node.children[chars[i]] === undefined) {
      node.children[chars[i]] = new Trie();
    }
    node = node.children[chars[i]];
  }
  node.word = word;
}
