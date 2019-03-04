let stack = function() {
  this.head = null;
  this.count = 0;
  this.push = function(val) {
    if (!this.head) {
      this.head = {
        val: val
      };
    } else {
      let node = {
        val: val
      };
      node.next = this.head;
      this.head = node;
    }
    this.count++;
  };
  this.pop = function() {
    let val = head.val;
    head = head.next;
    this.count--;
    return val;
  };
};
let setOfStacks = function(max) {
  let stacks = [];
  this.push = function(val) {
    if (stacks.length == 0) {
      stacks.push(new stack());
    }
    let stackRef = stacks[stacks.length - 1];
    if (stackRef.count >= max) {
      stacks.push(new stack());
    }
    stackRef = stacks[stacks.length - 1];
    stackRef.push(val);
  };
  this.pop = function() {
    while (true) {
      if (stacks.length == 0) {
        return null;
      }
      let topStack = stacks.pop();
      if (topStack.count != 0) {
        return topStack.pop();
      }
    }
  };
  this.popAt = function(index) {
    let stack = stacks[index];
    return stack.pop();
  };
};

function createStacks(cap, itemCount) {
  let sos = new setOfStacks(cap);
  for (let i = 0; i < itemCount; i++) {
    var min = 0;
    var max = 9;
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    sos.push(random);
  }
}
function print(stacks) {
  console.log("printing now...");
}
let stacks = createStacks(5, 20);
print(stacks);
