/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let leftCurr = l1;
  let rightCurr = l2;
  let carry = 0;
  let result = new ListNode(0);
  let resultHead = result;
  while (leftCurr !== null || rightCurr !== null) {
    let leftVal = 0;
    if (leftCurr !== null) {
      leftVal = parseInt(leftCurr.val);
      leftCurr = leftCurr.next;
    }
    let rightVal = 0;
    if (rightCurr !== null) {
      rightVal = parseInt(rightCurr.val);
      rightCurr = rightCurr.next;
    }
    let total = leftVal + rightVal + carry;

    carry = 0;
    if (total > 9) {
      carry = 1;
      total = total % 10;
    }
    result.next = new ListNode(total);
    result = result.next;
  }
  if (carry > 0) {
    result.next = new ListNode(carry);
  }

  return resultHead.next;
};
