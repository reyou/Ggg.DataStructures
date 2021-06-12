/**
 * @param {ListNode} head
 * @param {number} start
 * @param {number} end
 * @return {ListNode}
 */
const reverseBetween = (head, start, end) => {
  // place left and right
  // reverse from left to right
  // left-1 should point right.next
  let tempHead = new ListNode(-1);
  tempHead.next = head;
  let leftPrev = null;
  let leftNode = tempHead;
  let rightNode = tempHead;
  // move right one
  while (end > 0) {
    rightNode = rightNode.next;
    end--;
  }

  // move left one
  while (start > 0) {
    leftNode = leftNode.next;
    start--;
    if (start > 0) {
      leftPrev = leftNode;
    }
  }

  let endPointer = rightNode.next;
  rightNode.next = null;
  let reversedLinkedList = reverseLinkedList(leftNode);

  // tail
  leftNode.next = endPointer;
  if (leftPrev != null) {
    leftPrev.next = reversedLinkedList;
  } else {
    leftPrev = reversedLinkedList;
  }

  return leftPrev;
};

function reverseLinkedList(head) {
  let prev = null;
  let cur = head;
  while (cur != null) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return prev;
}
