/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = (head) => {
  if (head == null && head.next == null) {
    return head;
  }
  let evenListTail = new ListNode();
  let oddListTail = new ListNode();
  let evenListHead = evenListTail;
  let oddListHead = oddListTail;
  let index = 0;
  let curr = head;

  while (curr != null) {
    if (index % 2 === 0) {
      evenListTail.next = curr;
      evenListTail = evenListTail.next;
    } else {
      oddListTail.next = curr;
      oddListTail = oddListTail.next;
    }
    curr = curr.next;
    index++;
  }

  evenListTail.next = oddListHead.next;
  oddListTail.next = null;

  return evenListHead.next;
};
