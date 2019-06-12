/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  if (root.val == p || root.val == q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  if (left) return left;
  if (right) return right;
  return null;
};

console.log(
  lowestCommonAncestor(
    {
      val: 6,
      right: {
        val: 8,
        right: { val: 9, right: null, left: null },
        left: { val: 7, right: null, left: null }
      },
      left: {
        val: 2,
        right: {
          val: 4,
          right: { val: 5, right: null, left: null },
          left: { val: 3, right: null, left: null }
        },
        left: { val: 0, right: null, left: null }
      }
    },
    2,
    8
  )
);
