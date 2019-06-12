/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root == null) {
    return null;
  }
  let result = resolve(root);
  return result;
};

function resolve(root) {
  let queue = [];
  let children = [];
  children.push(root);
  while (children.length > 0) {
    let node = children.shift();
    queue.push(node);
    if (node.left) children.push(node.left);
    if (node.right) children.push(node.right);
  }
  let startIndex = 0;
  let endIndex = 1;
  while (true) {
    if (Math.pow(2, endIndex) - 1 > queue.length) {
      break;
    }
    for (
      let i = Math.pow(2, startIndex) - 1;
      i < Math.pow(2, endIndex) - 1 - 1;
      i++
    ) {
      queue[i].next = queue[i + 1];
    }
    startIndex++;
    endIndex++;
  }
  return root;
}
