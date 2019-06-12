function detectCycle(head) {
  if (!head || !head.next) {
    return null;
  }

  let slow = head.next;
  let fast = head.next.next;

  while (true) {
    if (!fast) return null;
    if (slow === fast) {
      break;
    }
    slow = slow.next;
    if (!fast.next) return null;
    fast = fast.next.next;
  }

  fast = head;

  while (true) {
    if (slow === fast) return slow;
    fast = fast.next;
    slow = slow.next;
  }
}
