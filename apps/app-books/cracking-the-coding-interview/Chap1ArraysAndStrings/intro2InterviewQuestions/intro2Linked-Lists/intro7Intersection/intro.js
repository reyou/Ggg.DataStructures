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
function isIntersect(node1, node2) {
  let hash = nodeToHash(node1);
  validateIntersect(hash, node2);
}
function validateIntersect(hash, node2) {
  while (true) {
    if (!node2) {
      break;
    }
    if (hash[node2.val.toString().charCodeAt(0)]) {
      console.log("There is an instersection at:", node2.val);
      return;
    }
    node2 = node2.next;
  }
  console.log("There is no intersection.");
}
function nodeToHash(node1) {
  let hash = [];
  while (true) {
    if (!node1) {
      break;
    }
    let val = node1.val;
    hash[val.toString().charCodeAt(0)] = 1;
    node1 = node1.next;
  }
  return hash;
}
let head = buildLinkedList(10);
let head2 = buildLinkedList(10);
print(head);
print(head2);
isIntersect(head, head2);
