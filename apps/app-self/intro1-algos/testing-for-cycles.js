/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let slowRunner = head;
  let fastRunner = head.next;

  if (fastRunner == null) {
    return false;
  }

  while (slowRunner != null && fastRunner != null) {
    if (slowRunner == fastRunner) {
      return true;
    }
    slowRunner = slowRunner.next;
    if (fastRunner.next == null) {
      return false;
    }
    fastRunner = fastRunner.next.next;
  }
  return false;
};
