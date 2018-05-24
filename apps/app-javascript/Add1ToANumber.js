// Add 1 to a number represented as linked list
// https://www.youtube.com/watch?v=utc8bwTDjLk
// http://www.geeksforgeeks.org/add-1-number-represented-linked-list/
/*Number is represented in linked list such that each digit corresponds 
to a node in linked list. Add 1 to it. For example 1999 is represented 
as (1-> 9-> 9 -> 9) and adding 1 to it should change it to (2->0->0->0)*/
var Node = function (data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}
var AddOneFun = function (node) {
    // find tail
    var tail;
    tail = node.next;
    while (tail != null) {
        if (tail.next == null) {
            break;
        }
        tail = tail.next;
    }

    var keepAdding = true;
    var newHead;
    while (keepAdding) {
        tail.data = tail.data + 1;
        if (tail.data == 10) {
            tail.data = 0;
            if (tail.prev == null) {
                newHead = new Node(tail.data);
                newHead.next = tail;
                tail.prev = newHead;
                keepAdding = false;
            }
            else {
                tail = tail.prev;                
            }

        }
        else {
            keepAdding = false;
        }
    }
    console.log(node.data);
    var next = node.next;
    while (next != null) {
        console.log(next.data);
        next = next.next;
    }
}
var node1 = new Node(1);
var node2 = new Node(9);
var node3 = new Node(9);
var node4 = new Node(9);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.prev = node3;
node3.prev = node2;
node2.prev = node1;
AddOneFun(node1);