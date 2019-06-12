function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var generateTrees = function(n) {
  let results = resolve(n);
  return results;
};

function resolve(n) {
  
}

let results = generateTrees(3);
results.forEach(element => {
  console.log(JSON.stringify(element));
});
