class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null; // Points to another TreeNode object
    this.right = null; // Points to another TreeNode object
  }
}
/**
 * @param {Array<number>} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  return buildBstArray(nums, 0, nums.length);
};

// [1, 2, 3, 4, 5, 6, 7]
// [4, 2, 6, 1, 3, 5, 7]
// left = 0; right = 6, middle = 3
//
function buildBstArray(nums, left, right) {
  if (left >= right) {
    return;
  }
  let middleIndex = left + Math.floor((right - left) / 2);
  let newNode = new TreeNode(nums[middleIndex]);
  newNode.left = buildBstArray(nums, left, middleIndex);
  newNode.right = buildBstArray(nums, middleIndex + 1, right);
  return newNode;
}

console.log(JSON.stringify(sortedArrayToBST([1, 2])));
// console.log(JSON.stringify(sortedArrayToBST([1, 2, 3, 4, 5, 6, 7])));
