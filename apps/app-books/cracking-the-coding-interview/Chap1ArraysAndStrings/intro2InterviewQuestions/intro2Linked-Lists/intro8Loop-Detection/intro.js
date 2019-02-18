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
function printCircle(node) {
  let hash = [];
  while (true) {
    if (!node) {
      break;
    }
    let val = node.val;
    if (hash[val.toString().charCodeAt(0)] == 1) {
      console.log("Loop detected at:", val);
      return;
    }
    hash[val.toString().charCodeAt(0)] = 1;
    node = node.next;
  }
  console.log("No loop detected.");
}
let head = buildLinkedList(10);
print(head);
printCircle(head);
