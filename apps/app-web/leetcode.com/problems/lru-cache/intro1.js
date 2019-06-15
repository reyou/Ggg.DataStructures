let Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
};

var LRUCache = function(capacity) {
  this.size = 0;
  this.capacity = capacity;
  this.hash = {};
  this.head = new Node(0, 0);
  this.tail = new Node(0, 0);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.addNode = function(node) {
  // h <=> t
  let nextPointer = this.head.next;
  this.head.next = node;
  node.prev = this.head;
  node.next = nextPointer;
  nextPointer.prev = node;
};

LRUCache.prototype.removeNode = function(node) {
  // h <=> 1 <=> 3 <=> t
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.get = function(key) {
  let node = this.hash[key];
  if (node !== undefined) {
    this.removeNode(node);
    this.addNode(node);
    return node.value;
  }
  return -1;
};

LRUCache.prototype.put = function(key, value) {
  let node = this.hash[key];
  if (node !== undefined) {
    this.removeNode(node);
  } else {
    this.size = this.size + 1;
  }
  let newNode = new Node(key, value);
  this.addNode(newNode);
  this.hash[key] = newNode;
  if (this.size > this.capacity) {
    let lastNode = this.tail.prev;
    this.removeNode(lastNode);
    delete this.hash[lastNode.key];
    this.size = this.size - 1;
  }
};
