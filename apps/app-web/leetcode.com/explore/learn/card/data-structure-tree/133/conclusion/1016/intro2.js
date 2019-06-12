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
  // head of the next level
  let head = null;
  // the leading node on the next level
  let last = null;
  // prevrent node of prevrent level
  let prev = root;

  while (prev) {
    while (prev) {
      // left child
      if (prev.left) {
        if (last) {
          last.next = prev.left;
          console.log(`left - last.next is ${last.next.val}`);
        } else {
          head = prev.left;
          console.log(`left - head is ${head.val}`);
        }
        last = prev.left;
        console.log(`left - last is ${last.val}`);
      }
      // right child
      if (prev.right != null) {
        if (last != null) {
          last.next = prev.right;
          console.log(`right - last.next is ${last.next.val}`);
        } else {
          head = prev.right;
          console.log(`right - head is ${head.val}`);
        }
        last = prev.right;
        console.log(`right - last is ${last.val}`);
      }
      // move to next node
      prev = prev.next;
      console.log(`prev is ${prev ? prev.val : prev}`);
      console.log(
        `move to next node head: ${head ? head.val : head} last: ${
          last ? last.val : last
        } prev: ${prev ? prev.val : prev}  \n`
      );
    }

    // move to next level
    prev = head;
    head = null;
    last = null;
    console.log(`prev: ${head ? head.val : head}`);
    console.log(`move to next level \n`);
  }
  return root;
};
