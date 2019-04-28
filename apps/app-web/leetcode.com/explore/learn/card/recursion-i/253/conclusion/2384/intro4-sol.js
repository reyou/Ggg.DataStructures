function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function generateTrees(n) {
  if (n < 1) return [];
  const dp = [...Array(n + 1)].map(r => Array(n + 1));
  return generate(1, n);

  function generate(start, end) {
    if (start > end) {
      return [null];
    }
    if (dp[start][end]) {
      return dp[start][end];
    }

    const res = [];
    for (let root = start; root <= end; root++) {
      let lefts = generate(start, root - 1);
      let rights = generate(root + 1, end);
      for (let left of lefts) {
        for (let right of rights) {
          const newTree = new TreeNode(root);
          newTree.left = left;
          newTree.right = right;
          res.push(newTree);
        }
      }
    }
    dp[start][end] = res;
    return res;
  }
}
let results = generateTrees(2);
results.forEach(element => {
  console.log(JSON.stringify(element));
});
