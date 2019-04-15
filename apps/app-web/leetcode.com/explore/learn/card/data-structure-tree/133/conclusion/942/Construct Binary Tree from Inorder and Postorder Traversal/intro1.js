/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function(inorder, postorder) {
  if (!inorder || inorder.length == 0) {
    return null;
  }
  let rootVal = postorder[postorder.length - 1];
  let root = new TreeNode(rootVal);
  resolve(root, inorder, postorder);
  return root;
};
function getRootIndex(val, inorder) {
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === val) {
      return i;
    }
  }
  return -1;
}
function resolve(root, inorder, postorder) {
  let rootIndex = getRootIndex(root.val, inorder);
  let leftRoot = getLeftRoot(root.val, inorder, postorder);
  let rightRoot = getRightRoot(root.val, inorder, postorder);

  if (leftRoot) {
    // add to left
    root.left = new TreeNode(leftRoot);
    let inorder2 = [];
    for (let i = 0; i < rootIndex; i++) {
      if (inorder[i] != root.val) {
        inorder2.push(inorder[i]);
      }
    }
    resolve(root.left, inorder2, postorder);
  }
  if (rightRoot) {
    // add to right
    root.right = new TreeNode(rightRoot);
    let inorder2 = [];
    for (let i = rootIndex + 1; i < inorder.length; i++) {
      if (inorder[i] != root.val) {
        inorder2.push(inorder[i]);
      }
    }
    resolve(root.right, inorder2, postorder);
  }
}

function getLeftRoot(val, inorder, postorder) {
  let lastIndex = 0;
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === val) {
      lastIndex = i;
    }
  }
  for (let i = 0; i < postorder.length; i++) {
    for (let j = 0; j < lastIndex; j++) {
      if (inorder[j] === postorder[postorder.length - 1 - i]) {
        return inorder[j];
      }
    }
  }
  return null;
}

function getRightRoot(val, inorder, postorder) {
  let startIndex = 0;
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === val) {
      startIndex = i;
    }
  }
  for (let i = 0; i < postorder.length; i++) {
    for (let j = startIndex + 1; j < inorder.length; j++) {
      if (inorder[j] === postorder[postorder.length - 1 - i]) {
        return inorder[j];
      }
    }
  }
  return null;
}

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];

console.log(buildTree(inorder, postorder));
