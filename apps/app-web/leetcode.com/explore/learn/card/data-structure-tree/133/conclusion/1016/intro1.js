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
  if (!root) return null;
  resolve(root);
  return root;
};

function resolve(root) {
  let buffer = [];
  buffer.push(root);
  let children = [];

  while (true) {
    while (buffer.length > 0) {
      let node = buffer.shift();
      if (node.left) children.push(node.left);
      if (node.right) children.push(node.right);
    }
    if (children.length == 0) {
      break;
    }
    for (let i = 0; i < children.length; i++) {
      if (i + 1 < children.length) {
        children[i].next = children[i + 1];
      }
    }
    while (children.length > 0) {
      buffer.push(children.shift());
    }
  }
}
