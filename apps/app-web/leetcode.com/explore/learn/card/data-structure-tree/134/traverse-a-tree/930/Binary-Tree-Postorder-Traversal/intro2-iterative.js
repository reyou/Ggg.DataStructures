// not complete
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
var postorderTraversal = function(root) {
  let result = resolve(root);
  return result;
};

function resolve(root) {
  if (root == null) {
    return [];
  }
  let results = [];
  let stack = [];
  stack.push(root);
  while (true) {
    while (root != null) {
      if (root.left) {
        stack.push(root.left);
        root = root.left;
      } else {
        break;
      }
    }
    if (root.right != null) {
      stack.push(root.right);
      root = root.right;
    } else {
      if (stack.length == 0) {
        break;
      }
      let node = stack.pop();
      results.push(node.val);
    }
  }
  return results;
}
