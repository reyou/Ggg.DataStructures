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
}
function deleteMiddle(head, val) {
  let prev = head;
  let runner = head.next;
  while (true) {
    if (!runner || !runner.next) {
      break;
    }
    if (runner.val == val) {
      prev.next = runner.next;
      runner = runner.next.next;
    } else {
      prev = runner;
      runner = runner.next;
    }
  }
}
let head = buildLinkedList(10);
print(head);
deleteMiddle(head, 4);
print(head);
