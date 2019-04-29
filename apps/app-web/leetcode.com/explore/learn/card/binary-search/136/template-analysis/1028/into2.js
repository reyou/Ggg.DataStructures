/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let child = null;
  if (target < root.val) {
    child = root.left;
  } else {
    child = root.right;
  }
  if (child == null) {
    return root.val;
  }
  let closest = closestValue(child, target);
  if (Math.abs(closest - target) < Math.abs(root.val - target)) {
    return closest;
  }
  return root.val;
};
