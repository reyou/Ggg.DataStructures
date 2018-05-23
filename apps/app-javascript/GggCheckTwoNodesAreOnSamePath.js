//=============================================================================
// Check if two nodes are on same path in a tree
// http://www.geeksforgeeks.org/check-if-two-nodes-are-on-same-path-in-a-tree/
// https://www.youtube.com/watch?v=BfcmGeCkazc 
//=============================================================================
var Node = function (data) {
    this.data = data;
    this.next = [];
}
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);
// link nodes
node1.next[0] = node2;
node1.next[1] = node3;
node1.next[2] = node4;
node2.next[0] = node5;
node3.next[0] = node6;
node4.next[0] = node7;

var checkIfSamePath = function (root, node1, node2) {
    var counter = 0;
    var children = root.next;
    for (var i = 0; i < children.length; i++) {
        counter = 0;
        var child = children[i];
        var cStack = [];
        while (child) {
            var subChildren = child.next;
            for (var j = 0; j < subChildren.length; j++) {
                cStack.push(subChildren[j]);
            }
            if (child.data === node1.data || child.data === node2.data) {
                counter++;
            }
            child = cStack.pop();
        }
        if (root.data === node1.data || root.data === node2.data) {
            counter++;
        }
        if (counter >= 2) {
            return true;
        }
    }
    return false;
}

var result1 = checkIfSamePath(node1, node1, node5);
var result2 = checkIfSamePath(node1, node1, node6);
var result3 = checkIfSamePath(node1, node2, node6);
console.log(result1);
console.log(result2);
console.log(result3);
//=============================================================================
