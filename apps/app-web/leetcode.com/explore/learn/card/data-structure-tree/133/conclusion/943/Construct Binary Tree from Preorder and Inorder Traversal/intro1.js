/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function(preorder, inorder) {
  if (preorder == null) {
    return null;
  }
  let result = resolve(preorder, inorder, 0, inorder.length);
  return result;
};

function findRootIndex(inorder, rootVal, start, end) {
  for (let i = start; i < end; i++) {
    if (inorder[i] === rootVal) {
      return i;
    }
  }
  return null;
}
function getNextNode(preorder) {
  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] != null) {
      let val = preorder[i];
      return {
        val: val,
        index: i
      };
    }
  }
  return null;
}

function resolve(preorder, inorder, start, end) {
  let rootObj = getNextNode(preorder);
  if (rootObj == null) {
    return null;
  }
  let nodeIndex = findRootIndex(inorder, rootObj.val, start, end);
  if (nodeIndex == null) {
    return null;
  }
  preorder[rootObj.index] = null;
  let node = new TreeNode(rootObj.val);
  node.left = resolve(preorder, inorder, 0, nodeIndex);
  node.right = resolve(preorder, inorder, nodeIndex + 1, end);
  return node;
}
let inorder = [3, 9, 20, 15, 7];
let postorder = [9, 3, 15, 20, 7];
console.log(JSON.stringify(buildTree(inorder, postorder), null, 4));
