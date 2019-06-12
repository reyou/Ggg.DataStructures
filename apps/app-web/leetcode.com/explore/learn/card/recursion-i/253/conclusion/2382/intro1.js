/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let root = new ListNode(null);
  resolve(l1, l2, root);
  return root.next;
};

function resolve(node1, node2, root) {
  if (!node1 && !node2) return root;
  if (node1) {
    if (node2) {
      if (node1.val <= node2.val) {
        root.next = new ListNode(node1.val);
        return resolve(node1.next, node2, root.next);
      } else {
        root.next = new ListNode(node2.val);
        return resolve(node1, node2.next, root.next);
      }
    } else {
      root.next = new ListNode(node1.val);
      return resolve(node1.next, null, root.next);
    }
  } else {
    root.next = new ListNode(node2.val);
    return resolve(null, node2.next, root.next);
  }
}
