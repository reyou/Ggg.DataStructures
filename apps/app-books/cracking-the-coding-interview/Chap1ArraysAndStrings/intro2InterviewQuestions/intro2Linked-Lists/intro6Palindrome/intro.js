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
function isPalindrome(node) {
  let arr = nodeToArr(node);
  for (let i = 0; i < arr.length; i++) {
    if (i >= arr.length - 1 - i) {
      return true;
    }
    let left = arr[i];
    let right = arr[arr.length - 1 - i];
    if (left != right) {
      return false;
    }
  }
  return true;
}
function nodeToArr(node) {
  let arr = [];
  let counter = 0;
  while (true) {
    if (!node) {
      break;
    }
    let val = node.val;
    arr[counter] = val;
    node = node.next;
    counter++;
  }
  return arr;
}
let head = buildLinkedList(10);
print(head);
let isP = isPalindrome(head);
console.log(isP);
