/**
 * @param {TreeNode} root
 * @return {Array<number>}
 */
const inorderTraversal = (root) => {
  let stack = [];
  let node = root;
  let result = [];

  while (node != null) {
    stack.push(node);
    node = node.left;
    if (node === null) {
      while (stack.length > 0) {
        let resultNode = stack.pop();
        if (resultNode.val !== null) {
          result.push(resultNode.val);
        }
        if (resultNode.right != null) {
          node = resultNode.right;
          break;
        }
      }
    }
  }
  return result;
};
