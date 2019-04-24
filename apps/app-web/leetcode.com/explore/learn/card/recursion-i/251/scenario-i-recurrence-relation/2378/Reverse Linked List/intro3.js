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
  if (!head) return null;
  head = resolve(head);
  return head;
};

function resolve(head) {
  if (head.next == null || head == null) {
    return head;
  }
  let p = resolve(head.next);
  head.next.next = head;
  head.next = null;
  return p;
}
