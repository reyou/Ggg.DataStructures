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
  let result = [];
  resolve(root, result);
  return result;
};

function resolve(root, result) {
  if (root == null) {
    return result;
  }
  resolve(root.left, result);
  resolve(root.right, result);
  result.push(root.val);
  return result;
}
