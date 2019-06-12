var AutocompleteSystem = function(sentences, times) {
  this.children = {};
  this.val = 0;
  this.freq = {};
  this.query = "";
  this.buildMapping(sentences, times);
};

AutocompleteSystem.prototype.buildMapping = function(sentences, times) {
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    this.buildSentence(sentence, times[i]);
  }
};

AutocompleteSystem.prototype.buildSentence = function(sentence, val) {
  let chars = sentence.split("");
  let node = this.children;
  for (let i = 0; i < chars.length; i++) {
    if (node[chars[i]] === undefined) {
      node[chars[i]] = { children: {}, val: 0 };
    }
    node = node[chars[i]];
  }
  node.val = node.val + val;
  this.freq[sentence] = node.val;
};

AutocompleteSystem.prototype.searchPrefix = function(prefix) {
  let found = [];
  for (let key in this.freq) {
    if (key.indexOf(prefix) === 0) {
      found.push({
        sentence: key,
        count: this.freq[key]
      });
    }
  }
  found.sort((a, b) => {
    if (a.count > b.count) {
      return -1;
    } else if (b.count > a.count) {
      return 1;
    }
    if (a.sentence < b.sentence) {
      return -1;
    }
    return 1;
  });

  let results = [];
  let max = 3;
  let counter = 0;
  while (true) {
    if (results.length === max) break;
    if (counter > found.length - 1) break;
    results.push(found[counter].sentence);
    counter++;
  }
  return results;
};

AutocompleteSystem.prototype.search = function() {
  let chars = this.query.split("");
  let node = this.children;
  let prefix = "";
  for (let i = 0; i < chars.length; i++) {
    if (node[chars[i]] === undefined) {
      return [];
    }
    prefix += chars[i];
    node = node[chars[i]];
  }
  let results = this.searchPrefix(prefix);
  return results;
};

AutocompleteSystem.prototype.input = function(c) {
  if (c === "#") {
    this.buildSentence(this.query, 1);
    this.query = "";
    return [];
  } else {
    this.query += c;
    return this.search();
  }
};
