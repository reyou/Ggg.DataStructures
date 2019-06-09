var Trie = function() {
  this.children = {};
  this.isLast = false;
  this.val = 0;
};
var WordDictionary = function() {
  this.trie = new Trie();
};

WordDictionary.prototype.addWord = function(word) {
  let node = this.trie.children;
  let chars = word.split("");
  for (let i = 0; i < chars.length; i++) {
    if (node[chars[i]] === undefined) {
      node[chars[i]] = new Trie();
    }
    node = node[chars[i]];
  }
  node.isLast = true;
};

WordDictionary.prototype.search2 = function(node, word) {
  let chars = word.split("");
  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    if (char === ".") {
      for (let key in node) {
        if (node[key].val !== undefined) {
          let result = this.search2(node[key], word.substring(i + 1));
          if (result) {
            return true;
          }
        }
      }
      return false;
    } else {
      if (node[char] === undefined) {
        return false;
      }
      node = node[char];
    }
  }
  return node.isLast;
};

WordDictionary.prototype.search = function(word) {
  let node = this.trie.children;
  return this.search2(node, word);
};
