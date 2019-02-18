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
function findElement(n, head) {
  let length = getLength(head);
  let index = length - n;
  let val = getVal(head, index);
  return val;
}
function getVal(head, index) {
  let counter = 1;
  while (true) {
    if (index == counter) {
      return head.val;
    }
    head = head.next;
    counter++;
  }
}

function getLength(head) {
  let count = 1;
  while (head.next) {
    count++;
    head = head.next;
  }
  return count;
}
let head = buildLinkedList(10);
print(head);
console.log(findElement(4, head));
