let stack = function() {
  this.head = null;
  this.push = function(val) {
    let newItem = {
      val: val,
      next: null
    };
    newItem.next = this.head;
    this.head = newItem;
  };
  this.pop = function() {
    if (this.head) {
      let val = this.head.val;
      this.head = this.head.next;
      return val;
    } else {
      throw "Stack is empty.";
    }
  };
  this.peek = function() {
    return this.head.val;
  };
  this.isEmpty = function() {
    return this.head == null;
  };
};
function generate(num) {
  let stack1 = new stack();
  for (let i = 0; i < num; i++) {
    var min = 0;
    var max = 9;
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    stack1.push(random);
    console.log("Added:", random);
  }
  return stack1;
}
function print(stack2) {
  console.log("\nPrinting:");
  while (true) {
    let isEmpty = stack2.isEmpty();
    if (isEmpty) {
      break;
    }
    let val = stack2.pop();
    console.log(val);
  }
}
function sort(stack2) {
  let stack3 = new stack();
  while (true) {
    if (stack2.isEmpty()) {
      break;
    }
    let val1 = stack2.pop();
    while (true) {
      if (stack3.isEmpty()) {
        stack3.push(val1);
        break;
      }
      let val2 = stack3.peek();
      if (val1 <= val2) {
        stack3.push(val1);
        break;
      }
      val2 = stack3.pop();
      stack2.push(val2);
    }
  }
  return stack3;
}
let stack2 = generate(5);
stack2 = sort(stack2);
print(stack2);
