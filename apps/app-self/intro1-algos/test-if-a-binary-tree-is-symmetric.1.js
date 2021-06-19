/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (root === null) {
    return true;
  }

  return isSymmetricInternal(root.left, root.right);
};

function isSymmetricInternal(leftNode, rightNode) {
  if (leftNode === null && rightNode === null) {
    return true;
  }
  if (leftNode === null || rightNode === null) {
    return false;
  }
  if (leftNode.val === rightNode.val) {
    return (
      isSymmetricInternal(leftNode.left, rightNode.right) &&
      isSymmetricInternal(leftNode.right, rightNode.left)
    );
  }
  return false;
}
