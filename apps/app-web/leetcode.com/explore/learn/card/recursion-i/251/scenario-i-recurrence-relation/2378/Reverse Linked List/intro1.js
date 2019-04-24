/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let queue = [];
  resolve_r(head, null, queue);
  return queue.pop();
};

function resolve_r(head, prev, queue) {
  queue[0] = prev;
  if (head == null) {
    return head;
  }
  resolve_r(head.next, head, queue);
  head.next = prev;
}
