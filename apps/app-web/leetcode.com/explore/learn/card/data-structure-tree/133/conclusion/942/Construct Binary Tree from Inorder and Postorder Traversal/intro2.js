var buildTree = function(inorder, postorder) {
  if (!inorder.length) return null;
  const toInorder = inorder.reduce((map, a, i) => ((map[a] = i), map), {});
  return helper(inorder, postorder, toInorder, 0, postorder.length - 1);
};

function helper(inorder, postorder, toInorder, low, high) {
  if (low > high) return null;
  const val = postorder[high];
  const node = new TreeNode(val);
  if (low < high) {
    let leftSize = 0;
    while (toInorder[postorder[low + leftSize]] < toInorder[val]) leftSize++;
    node.left = helper(inorder, postorder, toInorder, low, low + leftSize - 1);
    node.right = helper(
      inorder,
      postorder,
      toInorder,
      low + leftSize,
      high - 1
    );
  }
  return node;
}
