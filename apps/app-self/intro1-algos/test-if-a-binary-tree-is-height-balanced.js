/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root) => {
  return dfs(root);
};

function dfs(root) {
  if (root === null) {
    return true;
  }
  let leftHeight = getHeight(root.left);
  let rightHeigth = getHeight(root.right);
  if (Math.abs(leftHeight - rightHeigth) > 1) {
    return false;
  } else {
    return dfs(root.left) && dfs(root.right);
  }
}

function getHeight(node) {
  if (node === null || node.val === null) {
    return 0;
  }

  let left = getHeight(node.left);
  let right = getHeight(node.right);

  return Math.max(left, right) + 1;
}
