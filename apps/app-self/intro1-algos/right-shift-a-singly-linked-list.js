/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  // get the length => 4
  // k = 6
  // k % 4 = 2 to the right
  let length = getLength(head);
  let rotationAmount = k % length;
  let rightPointerIndex = length - rotationAmount;
  if (rotationAmount === 0 || rightPointerIndex === 0) {
    return head;
  }
  let current = new ListNode();
  current.next = head;
  while (rightPointerIndex > 0) {
    current = current.next;
    rightPointerIndex--;
  }
  current.next.next = head;
  current.next = null;
  return current;
};

function getLength(head) {
  let size = 0;
  let current = head;
  while (current != null) {
    size++;
    current = current.next;
  }
  return size;
}
