class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}
class Solution {
  buildTree(inorder, preorder, n) {
    return this.buildTreeInternal(inorder, preorder, n, 0);
  }

  // preOrder -> find root
  // inOrder -> split
  buildTreeInternal(inorder, preorder, n, rootIndex) {
    if (rootIndex === 9999999) {
      return null;
    }
    let rootVal = preorder[rootIndex];
    let node = new Node(rootVal);
    let inOrderIndex = inorder.indexOf(rootVal);
    let inOrderSubLeft = inorder.slice(0, inOrderIndex);
    let inOrderSubRight = inorder.slice(inOrderIndex + 1);

    let rootIndexLeft = this.findRootIndex(inOrderSubLeft, preorder);
    let rootIndexRight = this.findRootIndex(inOrderSubRight, preorder);
    node.left = this.buildTreeInternal(
      inOrderSubLeft,
      preorder,
      n,
      rootIndexLeft
    );
    node.right = this.buildTreeInternal(
      inOrderSubRight,
      preorder,
      n,
      rootIndexRight
    );
    return node;
  }

  findRootIndex(subArray, preorder) {
    let rootIndex = 9999999;
    for (let i = 0; i < subArray.length; i++) {
      let target = subArray[i];
      rootIndex = Math.min(rootIndex, preorder.indexOf(target));
    }
    return rootIndex;
  }
}
let solution = new Solution();
console.log(solution.buildTree([1, 3], [1, 3], 2));
// console.log(solution.buildTree([1], [1], 1));
// console.log(solution.buildTree([1, 2, 3], [2, 1, 3], 3));
// console.log(buildTree([1, 6, 8, 7], [1, 6, 7, 8], 4));
debugger;
