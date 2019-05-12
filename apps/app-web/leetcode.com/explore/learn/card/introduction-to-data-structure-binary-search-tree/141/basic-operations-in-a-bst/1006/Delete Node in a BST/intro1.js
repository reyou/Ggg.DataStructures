/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  // target is the new root
  let target = findNode(root, key);
  if (!target) {
    return null;
  }
  // target is a leaf node
  if (target.left == null && target.right == null) {
    target = null;
  } else if (target.right) {
    // successor (+1)
    let temp = target.right;
    while (temp.left) {
      temp = temp.left;
    }
    target.val = temp.val;
    target.right = deleteNode(temp, target.val);
  } else {
    // predecessor (-1)
    let temp = target.left;
    while (temp.right) {
      temp = temp.right;
    }
    target.val = temp.val;
    target.left = deleteNode(temp, target.val);
  }
  return root;
};

function findNode(root, key) {
  if (!root) return null;
  if (root.val == key) {
    return root;
  }
  if (key < root.val) {
    return findNode(root.left, key);
  }
  return findNode(root.right, key);
}

console.log(
  deleteNode(
    {
      val: 5,
      right: {
        val: 6,
        right: {
          val: 7,
          right: null,
          left: null
        },
        left: null
      },
      left: {
        val: 3,
        right: { val: 4, right: null, left: null },
        left: { val: 2, right: null, left: null }
      }
    },
    3
  )
);
