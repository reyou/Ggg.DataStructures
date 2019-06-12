function buildLinkedList(n) {
  let node = {};
  var min = 0;
  var max = 9;
  let random = Math.floor(Math.random() * (+max - +min)) + +min;
  node.val = random;
  var currentNode = node;
  for (let i = 0; i < n; i++) {
    let nextNode = {};
    random = Math.floor(Math.random() * (+max - +min)) + +min;
    nextNode.val = random;
    currentNode.next = nextNode;
    currentNode = nextNode;
  }
  return node;
}
function print(head) {
  let builder = "";
  while (true) {
    builder += head.val + "-> ";
    let next = head.next;
    if (next == null) {
      break;
    }
    head = head.next;
  }
  console.log(builder);
  console.log("=================================\n");
}
function removeDups(head) {
  while (head) {
    let next = head.next;
    let prev = head;
    while (next) {
      if (head.val == next.val) {
        prev.next = next.next;
      }
      prev = next;
      next = next.next;
    }
    head = head.next;
  }
}
let head = buildLinkedList(10);
print(head);
removeDups(head);
print(head);
