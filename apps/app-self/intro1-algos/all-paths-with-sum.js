/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = (root, sum) => {
  if (root === null) {
    return 0;
  }
  let sum1 = pathSumFrom(root, sum);
  let sum2 = pathSum(root.left, sum);
  let sum3 = pathSum(root.right, sum);
  return sum1 + sum2 + sum3;
};

const pathSumFrom = function (node, sum) {
  if (node === null) {
    return 0;
  }
  let count = 0;
  if (node.val === sum) {
    count++;
  }
  count += pathSumFrom(node.left, sum - node.val);
  count += pathSumFrom(node.right, sum - node.val);
  return count;
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null; // Points to another TreeNode object
    this.right = null; // Points to another TreeNode object
  }
}
/*[5,5,null,1,-1]
10 */
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(5);
root.right = new TreeNode(2);

console.log(pathSum(root, 5));
