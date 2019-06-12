/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.next = null;
  this.val = null;
  this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let node = this.head;
  let counter = 0;
  while (node) {
    if (counter == index) {
      return node.val;
    }
    node = node.next;
    counter++;
  }
  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let node = new MyLinkedList();
  node.val = val;
  node.next = this.head;
  this.head = node;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let newNode = new MyLinkedList();
  newNode.val = val;
  if (this.head == null) {
    this.head = newNode;
  } else {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  let newNode = new MyLinkedList();
  newNode.val = val;
  if (index <= 0) {
    return this.addAtHead(val);
  }
  let counter = 0;
  let node = this.head;
  let prev = this.head;
  while (prev) {
    if (index == counter) {
      newNode.next = node;
      prev.next = newNode;
      break;
    }
    prev = node;
    if (node == null) {
      return;
    }
    node = node.next;
    counter++;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index == 0) {
    if (this.head) {
      this.head = this.head.next;
    }
    return;
  }
  let counter = 0;
  let node = this.head;
  let prev = null;
  while (node) {
    if (index == counter) {
      prev.next = node.next;
    }
    prev = node;
    node = node.next;
    counter++;
  }
};

var obj = new MyLinkedList();
obj.addAtIndex(-1, 0);
console.log(obj.get(0));
obj.deleteAtIndex(-1);
