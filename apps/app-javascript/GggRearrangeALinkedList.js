// Rearrange a linked list such that all even and odd positioned nodes are together
// http://www.geeksforgeeks.org/rearrange-a-linked-list-such-that-all-even-and-odd-positioned-nodes-are-together/
// https://www.youtube.com/watch?v=IUKRzbJac9o
/*Input:   1->2->3->4
Output:  1->3->2->4

Input:   10->22->30->43->56->70
Output:  10->30->56->22->43->70
*/
var reArrangeLinkedList = function (node) {
    var curNode = node;
    var firstOddNode;
    var lastOddNode;
    var lastEvenNode;
    while (curNode != null) {
        var data = curNode.data;
        if (data % 2 === 0) {
            if (lastEvenNode) {
                lastEvenNode.next = curNode;
            }
            lastEvenNode = curNode;

        }
        else {
            if (lastOddNode) {
                lastOddNode.next = curNode;
            }
            lastOddNode = curNode;
            if (!firstOddNode) {
                firstOddNode = curNode;
                if (firstOddNode.data != lastOddNode.data) {
                    firstOddNode.next = lastOddNode;
                }
                else {
                    lastOddNode = firstOddNode;
                }
            }

        }
        curNode = curNode.next;
    }
    lastOddNode.next = lastEvenNode;
    curNode = firstOddNode;
    while (curNode != null) {
        console.log(curNode.data);
        curNode = curNode.next;
    }
}

// 10->30->56->22->43->70
var Node = function (data) {
    this.data = data;
    this.next = null;
}
var node1 = new Node(10);
var node2 = new Node(30);
var node3 = new Node(56);
var node4 = new Node(22);
var node5 = new Node(43);
var node6 = new Node(70);
node2.next = node3;
node1.next = node2;
node3.next = node4;
node4.next = node5;
node5.next = node6;
reArrangeLinkedList(node1);