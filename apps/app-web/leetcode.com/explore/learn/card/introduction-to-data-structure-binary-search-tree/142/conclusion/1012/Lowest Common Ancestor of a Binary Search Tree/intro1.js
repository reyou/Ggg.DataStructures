/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let arr1 = find(root, p);
  let arr2 = find(root, q);
  let left = 0;
  let lastCommon = null;
  while (true) {
    if (left > arr1.length - 1 || left > arr2.length - 1) {
      break;
    }
    if (arr1[left].val == arr2[left].val) {
      lastCommon = arr1[left];
    } else {
      break;
    }
    left++;
  }
  return lastCommon;
};

function find(root, target) {
  let arr = [];
  while (true) {
    if (!root) {
      return arr;
    }
    arr.push(root);
    if (root.val == target) {
      return arr;
    }
    if (target < root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
}

console.log(
  lowestCommonAncestor(
    {
      val: 6,
      right: {
        val: 8,
        right: { val: 9, right: null, left: null },
        left: { val: 7, right: null, left: null }
      },
      left: {
        val: 2,
        right: {
          val: 4,
          right: { val: 5, right: null, left: null },
          left: { val: 3, right: null, left: null }
        },
        left: { val: 0, right: null, left: null }
      }
    },
    2,
    8
  )
);
