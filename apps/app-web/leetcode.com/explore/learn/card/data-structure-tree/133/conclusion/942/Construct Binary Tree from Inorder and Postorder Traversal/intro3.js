function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null;
  let map = [];
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }
  return build(0, 0, inorder.length);
  function build(inS, poS, length) {
    let nodeVal = postorder[poS + length - 1];
    let head = new TreeNode(nodeVal),
      leftL = map[head.val] - inS;
    if (leftL > 0) head.left = build(inS, poS, leftL);
    if (length > leftL + 1)
      head.right = build(inS + leftL + 1, poS + leftL, length - 1 - leftL);
    return head;
  }
};

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];

console.log(buildTree(inorder, postorder));
