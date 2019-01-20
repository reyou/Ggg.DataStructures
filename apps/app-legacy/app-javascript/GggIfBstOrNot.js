// A program to check if a binary tree is BST or not | GeeksforGeeks
// https://www.youtube.com/watch?v=H13iz0rbeeo
// http://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
//=============================================================================
var nodeClass = function (data) {
    this.left = null;
    this.right = null;
    this.data = data;
}
var node = new nodeClass(4);
node.left = new nodeClass(2);
node.right = new nodeClass(5);
// breaks condition
// node.right.left = new nodeClass(10);
node.left.left = new nodeClass(1);
node.left.right = new nodeClass(3);
//=============================================================================
var isBst2Util = function (root, l, r) {
    // Base condition
    if (root == null)
        return true;

    // if left node exist that check it has
    // correct data or not
    if (l != null && root.data < l.data)
        return false;

    // if right node exist that check it has
    // correct data or not
    if (r != null && root.data > r.data)
        return false;

    // check recursively for every node.
    return isBst2Util(root.left, l, root) && isBst2Util(root.right, root, r);
}
console.log(isBst2Util(node, node.left, node.right));
//=============================================================================
var result = true;
var isBst = function (node) {
    if (node != null) {
        if (node.left) {
            if (node.left.data < node.data) {
                isBst(node.left);
            }
            else {
                result = false;
                return false;
            }
        }
        if (node.right) {
            if (node.right.data > node.data) {
                isBst(node.right);
            }
            else {
                result = false;
                return false;
            }
        }
    }
    if (result != false) {
        result = true;
    }
}


let testFirstFun = function () {
    isBst(node);
    console.log(result);
}
// testFirstFun();
//=============================================================================