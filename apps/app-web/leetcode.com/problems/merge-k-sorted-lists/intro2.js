/* 
Merge k sorted linked lists and return it as one sorted list. 
Analyze and describe its complexity.
Example:
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var mergeKLists = function(lists) {
  if (lists == null || lists.length === 0) {
    return null;
  }
  if (lists.length == 1) {
    return lists[0];
  }
  let merged = lists.shift();
  while (lists.length > 0) {
    let p2 = lists.shift();
    merged = mergeLists(merged, p2);
  }
  return merged;
};
function mergeLists(list1, list2) {
  let p1 = list1;
  let p2 = list2;
  let smaller = new ListNode();
  let newHead = new ListNode();
  if (p1 == null) return p2;
  if (p2 == null) return p1;
  if (p1.val <= p2.val) {
    smaller = p1;
    p1 = smaller.next;
  } else {
    smaller = p2;
    p2 = smaller.next;
  }
  newHead = smaller;
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      smaller.next = p1;
      smaller = p1;
      p1 = smaller.next;
    } else {
      smaller.next = p2;
      smaller = p2;
      p2 = smaller.next;
    }
  }
  if (p1 == null) smaller.next = p2;
  if (p2 == null) smaller.next = p1;
  return newHead;
}

let input = [
  {
    val: 1,
    next: {
      val: 4,
      next: {
        val: 5,
        next: null
      }
    }
  },
  {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  },
  {
    val: 2,
    next: {
      val: 6,
      next: null
    }
  }
];
let result = mergeKLists(input);
console.log(JSON.stringify(result));
