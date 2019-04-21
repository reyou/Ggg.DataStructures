/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let result = "";
  if (root == null) {
    return result;
  }
  let children = [];
  children.push(root);
  while (children.length > 0) {
    let child = children.shift();
    if (child == null) {
      result += null + ",";
      continue;
    }
    result += child.val + ",";
    children.push(child.left);
    children.push(child.right);
  }
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var deserialize = function(data) {
  if (data.length == 0) {
    return null;
  }
  let arr = data.split(",");
  let result = resolve(root, arr, 0);
  return result;
};

function resolve(root, arr, index) {
  if (index < arr.length) {
    let val = arr[index];
    if (val == "null") {
      root = new TreeNode(null);
    } else {
      root = new TreeNode(val);
    }
  } else {
    return null;
  }
  root.left = resolve(root, arr, index * 2 + 1);
  root.right = resolve(root, arr, index * 2 + 2);
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
