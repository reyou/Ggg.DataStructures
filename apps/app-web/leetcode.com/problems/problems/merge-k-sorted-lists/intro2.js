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
  let builder = [];
  if (lists.length < 2) {
    return lists[0];
  }
  let result = merge(lists, builder);
  return result;
};
function mergeLists(list1, list2) {
  let p1 = list1;
  let p2 = list2;
  if (p2 == null) {
    return list1;
  }
  while (true) {
    if (p1 == null) {
      break;
    }
    if (p1.val <= p2.val) {
      let temp = p1.next;
      p1.next = p2;
      p1 = temp;
    } else {
      if (p2.next == null) {
        break;
      }
      p2 = p2.next;
    }
  }
  if (p1 != null) {
    p2.next = p1;
  }
  return list2;
}
function merge(lists, builder) {
  if (builder.length == 2) {
    let merged = mergeLists(builder[0], builder[1]);
    builder.pop();
    return merged;
  }
  builder.push(lists.pop());
  return merge(lists, builder);
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
