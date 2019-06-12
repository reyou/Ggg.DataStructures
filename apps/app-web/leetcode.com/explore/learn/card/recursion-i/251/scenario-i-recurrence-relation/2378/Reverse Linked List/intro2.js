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
  let prev = null;
  let curr = head;
  let next = curr.next;
  // prev -> curr -> next
  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = next;
    if (next) next = next.next;
  }
  return prev;
};
