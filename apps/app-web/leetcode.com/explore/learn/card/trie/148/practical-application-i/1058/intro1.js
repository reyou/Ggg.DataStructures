var MapSum = function() {
  this.children = {};
  this.val = 0;
};

MapSum.prototype.insert = function(key, val) {
  let chars = key.split("");
  let node = this.children;
  for (let i = 0; i < chars.length; i++) {
    if (node[chars[i]] === undefined) {
      node[chars[i]] = new MapSum();
    }
    node = node[chars[i]];
  }
  // last node reached
  node.val = val;
};

MapSum.prototype.sum = function(prefix) {
  let sum = 0;
  let chars = prefix.split("");
  let node = this.children;
  for (let i = 0; i < chars.length; i++) {
    if (node[chars[i]] === undefined) {
      return 0;
    }
    node = node[chars[i]];
  }
  // last node here
  sum += node.val;
  // fetch remaining node values
  for (let key in node) {
    if (node[key].val !== undefined) {
      sum += this.getValues(node[key]);
    }
  }
  return sum;
};

MapSum.prototype.getValues = function(node) {
  if (node.val === undefined) {
    return 0;
  }
  let sum = node.val;
  for (let key in node) {
    sum += this.getValues(node[key]);
  }
  return sum;
};
