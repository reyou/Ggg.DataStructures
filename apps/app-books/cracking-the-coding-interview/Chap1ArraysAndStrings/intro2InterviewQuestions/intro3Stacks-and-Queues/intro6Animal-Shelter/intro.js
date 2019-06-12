let DogAndCat = function() {
  this.Node = {};
  this.first = null;
  this.last = null;
  this.enqueue = function(data) {
    let item = {
      data: data,
      next: null
    };
    if (this.last != null) {
      this.last.next = item;
    }
    this.last = item;
    if (this.first == null) {
      this.first = this.last;
    }
  };
  this.dequeueAny = function() {
    if (this.first == null) {
      return null;
    }
    let data = this.first.data;
    this.first = this.first.next;
    return data;
  };
  this.dequeueDog = function() {
    return this.dequeue("dog");
  };
  this.dequeue = function(data1) {
    let startNode = this.first;
    let prev = this.first;
    let counter = 0;
    while (true) {
      let data = startNode.data;
      if (data == data1) {
        if (counter == 0) {
          this.first == this.first.next;
          return data;
        }
        prev.next = startNode.next;
        return data;
      } else {
        prev = startNode;
        startNode = startNode.next;
      }
      counter++;
    }
  };
  this.dequeueCat = function() {
    return this.dequeue("cat");
  };
};
function createLl(count) {
  let dogAndCat = new DogAndCat();
  var min = 0;
  var max = 10;
  for (let i = 0; i < count; i++) {
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    if (random % 2 == 0) {
      dogAndCat.enqueue("dog");
    } else {
      dogAndCat.enqueue("cat");
    }
  }
  return dogAndCat;
}
function print(dogAndCat) {
  while (true) {
    let data = dogAndCat.dequeueAny();
    if (data == null) {
      break;
    }
    console.log(data);
  }
}
let dogAndCat = createLl(7);
// console.log("PR LL:");
// print(dogAndCat);
let cat1 = dogAndCat.dequeueCat();
console.log("DQ Cat:");
console.log(cat1);
let dog1 = dogAndCat.dequeueDog();
console.log("DQ Dog:");
console.log(dog1);
console.log("PR LL:");
print(dogAndCat);
