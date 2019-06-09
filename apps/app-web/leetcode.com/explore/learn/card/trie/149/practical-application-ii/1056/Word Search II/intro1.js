/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

let Trie = function() {
  this.children = {};
  this.last = false;
};

let insert = function(node, board, row, col, visited) {
  /*console.log({
        "function": "insert",
        row,
        col,       
    });   */
  if (
    row > board.length - 1 ||
    col > board[0].length - 1 ||
    row < 0 ||
    col < 0
  ) {
    return;
  }
  if (visited[row + "-" + col] !== undefined) {
    return;
  }
  visited[row + "-" + col] = true;
  if (node.children[board[row][col]] === undefined) {
    node.children[board[row][col]] = new Trie();
    console.log({
      function: "insert",
      "added:": board[row][col]
    });
  }
  let child = node.children[board[row][col]];
  // top
  insert(child, board, row - 1, col, visited);
  // right
  insert(child, board, row, col + 1, visited);
  // bottom
  insert(child, board, row + 1, col, visited);
  // left
  insert(child, board, row, col - 1, visited);
};

let buildTrie = function(board) {
  let node = new Trie();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      insert(node, board, row, col, {});
    }
  }
  /*console.log({
        "function": "buildTrie",
        nodePointer
    });*/
  return node;
};

let findWord = function(trie, word) {
  let chars = word.split("");
  let node = trie;
  /*  console.log({
        "function": "findWord",
         word,
        node,        
    });*/
  for (let i = 0; i < chars.length; i++) {
    if (node.children[chars[i]] === undefined) {
      return false;
    }
    node = node.children[chars[i]];
  }
  return true;
};

let findWords2 = function(trie, words) {
  let results = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let found = findWord(trie, word);
    if (found) {
      results.push(word);
    }
  }
  return results;
};

var findWords = function(board, words) {
  let trie = buildTrie(board);
  /*  console.log({
        "function": "findWords",
        trie
    });*/

  let results = findWords2(trie, words);
  return results;
};
