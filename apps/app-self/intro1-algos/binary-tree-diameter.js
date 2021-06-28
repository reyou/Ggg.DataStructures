/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
  let result = diameterOfBinaryTreeInternal(root);
  if (result > 1) {
    return result - 1;
  }
  return result;
};

function diameterOfBinaryTreeInternal(root) {
  if (root == null || root.val == null) {
    return 0;
  }
  if (root.left != null) {
    return (
      diameterOfBinaryTreeInternal(root.left) +
      diameterOfBinaryTreeInternal(root.right) +
      1
    );
  }
  if (root.right != null) {
    return (
      diameterOfBinaryTreeInternal(root.right) +
      diameterOfBinaryTreeInternal(root.left) +
      1
    );
  }

  return Math.max(
    diameterOfBinaryTreeInternal(root.left),
    diameterOfBinaryTreeInternal(root.right)
  );
}
