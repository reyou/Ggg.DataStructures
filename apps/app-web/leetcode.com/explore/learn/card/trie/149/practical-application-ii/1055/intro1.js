let Trie = function() {
  this.node = {};
  this.last = false;
  this.word = "";
};

var wordSquares = function(words) {
  let results = [];
  let trie = buildTrie(words);
  let prefix = "";
  resolve(words, results, [], trie, prefix);
  return results;
};
function buildTrie(words) {
  let trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    insertToTrie(trie, word);
  }
  return trie;
}
function insertToTrie(trie, word) {
  let node = trie.node;
  let chars = word.split("");
  for (let i = 0; i < chars.length; i++) {
    if (node[chars[i]] === undefined) {
      node[chars[i]] = new Trie();
    }
    node = node[chars[i]];
  }
  node.last = true;
  node.word = word;
}
function isValid(buffer) {
  let matrix = [];
  for (let i = 0; i < buffer.length; i++) {
    matrix[i] = [];
    let word = buffer[i];
    let chars = word.split("");
    for (let j = 0; j < chars.length; j++) {
      matrix[i][j] = chars[j];
    }
  }
  // right
  let rowStart1 = 0;
  let colStart1 = 0;
  // bottom
  let rowStart2 = 0;
  let colStart2 = 0;
  while (true) {
    if (rowStart1 == matrix.length || colStart1 == matrix.length) {
      return true;
    }
    if (matrix[rowStart1][colStart1] != matrix[rowStart2][colStart2]) {
      return false;
    }
    colStart1++;
    rowStart2++;
    if (colStart1 == matrix[0].length) {
      colStart1 = 0;
      rowStart1++;
    }
    if (rowStart2 == matrix.length) {
      rowStart2 = 0;
      colStart2++;
    }
  }
}
function filter(node, prefix, results) {
  if (node.last) {
    results.push(node.word);
  }
  if (prefix == "") {
    for (let key in node) {
      if (node[key].word !== undefined) {
        filter(node[key], prefix, results);
      }
    }
  }
  let chars = prefix.split("");
  for (let i = 0; i < chars.length; i++) {
    if (node[chars[i]] === undefined) {
      return results;
    }
    filter(node[chars[i]], prefix.slice(i + 1), results);
  }
  return results;
}
function resolve(words, results, buffer, trie, prefix) {
  if (buffer.length === words[0].length) {
    results.push(buffer.slice(0));
    return results;
  }

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    buffer.push(word);
    prefix = "";
    for (let i = 0; i < buffer.length; i++) {
      prefix += buffer[i][buffer.length - 1];
    }

    if (isValid(buffer) && word.indexOf(prefix) === 0) {
      resolve(words, results, buffer, trie, prefix);
    }
    buffer.pop();
  }
  return results;
}
let input = ["area", "lead", "wall", "lady", "ball"];
console.log(JSON.stringify(wordSquares(input)));
