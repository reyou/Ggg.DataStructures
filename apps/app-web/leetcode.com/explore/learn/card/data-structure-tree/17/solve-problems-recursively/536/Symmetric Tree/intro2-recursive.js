/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let result = resolve(root, root);
  return result;
};

function resolve(n1, n2) {
  if (n1 == null && n2 == null) return true;
  if (n1 == null || n2 == null) return false;
  return (
    n1.val == n2.val && resolve(n1.left, n2.right) && resolve(n1.right, n2.left)
  );
}
