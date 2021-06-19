/**
 * @param {TreeNode} node
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (node, targetSum) => {
  if (node === null) {
    return false;
  }
  return (
    hasPathSumInternal(node.left, node.val, targetSum) ||
    hasPathSumInternal(node.right, node.val, targetSum)
  );
};

function hasPathSumInternal(node, curr, targetSum) {
  if (node === null) {
    if (curr === targetSum) {
      return true;
    } else {
      return false;
    }
  } else {
    curr += node.val;
    if (curr > targetSum) {
      return false;
    }
    return (
      hasPathSumInternal(node.left, curr, targetSum) ||
      hasPathSumInternal(node.right, curr, targetSum)
    );
  }
}
