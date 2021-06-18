/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const removeKthToLast = (head, k) => {
  // calculate length of linked list 6
  // k = 2 iterate 4-1 = 3 times and
  // remove node.next
  let length = getLength(head);
  let iterationSize = length - k;
  if (iterationSize === 0) {
    // we are removing head
    // edge case!
    return head.next;
  }
  let targetNode = new ListNode();
  targetNode.next = head;
  for (let i = 0; i < iterationSize; i++) {
    targetNode = targetNode.next;
  }

  targetNode.next = targetNode.next.next;
  return head;
};

function getLength(head) {
  if (head === null) {
    return 0;
  }
  let cur = head;
  let size = 0;
  while (cur != null) {
    cur = cur.next;
    size++;
  }
  return size;
}
