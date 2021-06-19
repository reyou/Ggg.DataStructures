/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
  return isValidBSTInternal(root, -99999, 99999);
};

function isValidBSTInternal(node, min, max) {
  if (node === null || node.val === null) {
    return true;
  }

  if (node.val > max || node.val < min) {
    return false;
  }

  return (
    isValidBSTInternal(node.left, min, node.val) &&
    isValidBSTInternal(node.right, node.val, max)
  );
}
