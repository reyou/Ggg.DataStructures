/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let result = iterative(root);
  return result;
};

function iterative(root) {
  let stack = [];
  let results = [];

  while (true) {
    if (root != null) {
      stack.push(root);
      root = root.left;
    } else {
      if (stack.length == 0) {
        break;
      }
      let node = stack.pop();
      results.push(node.val);
      root = node.right;
    }
  }
  return results;
}

function dfs(root, arr) {
  if (!root) {
    return arr;
  }
  dfs(root.left, arr);
  arr.push(root.val);
  dfs(root.right, arr);
  return arr;
}
