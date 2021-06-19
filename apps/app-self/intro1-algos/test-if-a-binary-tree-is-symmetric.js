/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (root == null) {
    return true;
  }
  let leftArr = bta(root.left, [], 'left');
  let rightArr = bta(root.right, [], 'right');

  if (leftArr.length !== rightArr.length) {
    return false;
  }
  let counter = 0;
  while (true) {
    if (leftArr[counter] !== rightArr[counter]) {
      return false;
    }
    counter++;
    if (counter > leftArr.length - 1) {
      return true;
    }
  }
};

function bta(root, arr, type) {
  if (root === null) {
    return arr;
  }
  arr.push(root.val);
  if (type === 'left') {
    bta(root.left, arr, type);
    bta(root.right, arr, type);
  } else {
    bta(root.right, arr, type);
    bta(root.left, arr, type);
  }
  return arr;
}
