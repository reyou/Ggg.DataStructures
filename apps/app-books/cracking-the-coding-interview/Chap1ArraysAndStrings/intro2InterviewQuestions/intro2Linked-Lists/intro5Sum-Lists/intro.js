function buildLinkedList(n) {
  let node = {};
  var min = 0;
  var max = 9;
  let random = Math.floor(Math.random() * (+max - +min)) + +min;
  node.val = random;
  var currentNode = node;
  for (let i = 0; i < n - 1; i++) {
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
function sum(node1, node2) {
  let str1 = str(node1);
  let str2 = str(node2);
  str1 = str1
    .split("")
    .reverse()
    .join("");
  str2 = str2
    .split("")
    .reverse()
    .join("");
  return parseInt(str1) + parseInt(str2);
}
function str(node) {
  let builder = "";
  while (true) {
    if (!node) {
      break;
    }
    builder += node.val;
    node = node.next;
  }
  return builder;
}
let head = buildLinkedList(3);
let head2 = buildLinkedList(3);
print(head);
print(head2);
let result = sum(head, head2);
console.log(result);
