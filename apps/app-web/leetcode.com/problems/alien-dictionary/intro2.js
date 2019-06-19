/*There is a new alien language which uses the latin alphabet. 
However, the order among letters are unknown to you. 
You receive a list of non-empty words from the dictionary, 
where words are sorted lexicographically by the rules of this new language. 
Derive the order of letters in this language. */
/*Example 1:
Input:
[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
Output: "wertf" */

/**
 * @param {string[]} words
 * @return {string}
 */
class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}
var alienOrder = function(words) {
  let linkedLists = [];
  let hash = {};
  // head
  let node = new Node(null);
  let head = node;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (hash[word[0]] === undefined) {
      hash[word[0]] = [word];
    } else {
      hash[word[0]].push(word);
    }
    if (node.val != word[0]) {
      node.next = new Node(word[0]);
      node = node.next;
    }
  }
  linkedLists.push(head.next);
  for (let key in hash) {
    let words = hash[key];
    let node = new Node(null);
    let head = node;
    for (let i = 1; i < words.length; i++) {
      let wordPrev = words[i - 1];
      let wordCur = words[i];
      let left = 0;
      while (true) {
        if (left >= wordPrev.length || left >= wordCur.length) {
          break;
        }
        if (wordPrev[left] !== wordCur[left]) {
          node.next = new Node(wordPrev[left]);
          node.next.next = new Node(wordCur[left]);
          node = node.next.next;
          break;
        }
        left++;
      }
    }
    if (head.next) {
      linkedLists.push(head.next);
    }
  }
  let lastNodeVal = null;
  let results = [];
  while (linkedLists.length > 0) {
    let node = linkedLists.shift();
    if (lastNodeVal == null) {
      while (true) {
        results.push(node.val);
        if (node.next == null) {
          lastNodeVal = node.val;
          break;
        }
        node = node.next;
      }
    } else {
      if (node.val === lastNodeVal) {
        while (true) {
          if (node.next === null) {
            lastNodeVal = node.val;
            break;
          }
          node = node.next;
          results.push(node.val);
        }
      } else {
        linkedLists.push(node);
      }
    }
  }
  return results;
};
let input1 = ["wrt", "wrf", "er", "ett", "rftt"];
let output = alienOrder(input1);
console.log(output);
