/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) {
    return true;
  }
  let queue = [];
  queue.push(root);
  let result = resolve(queue, 1, []);
  return result;
};

function resolve(queue, level, levelArr) {
  if (queue.length == 0) {
    return true;
  }

  for (let i = 0; i < levelArr.length; i++) {
    if (levelArr[i] != levelArr[levelArr.length - 1 - i]) {
      return false;
    }
  }
  levelArr = [];
  let childQueue = [];
  while (true) {
    console.log("level:", level);
    if (queue.length == 0) {
      break;
    }
    let node = queue.shift();
    if (node.left) {
      childQueue.push(node.left);
      levelArr.push(node.left.val);
    } else {
      levelArr.push(-1);
    }
    if (node.right) {
      childQueue.push(node.right);
      levelArr.push(node.right.val);
    } else {
      levelArr.push(-1);
    }
  }
  while (childQueue.length > 0) {
    queue.push(childQueue.pop());
  }
  console.log("levelArr:", levelArr);
  return resolve(queue, level + 1, levelArr);
}
