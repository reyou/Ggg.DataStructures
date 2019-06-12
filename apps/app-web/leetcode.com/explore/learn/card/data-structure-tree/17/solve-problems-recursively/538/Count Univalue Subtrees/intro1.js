var countUnivalSubtrees = function(root) {
  return Math.abs(recurse(root));
};

var recurse = function(root) {
  if (!root) return 0;

  let left = recurse(root.left);
  let right = recurse(root.right);

  if (left < 0 || right < 0) {
    return (Math.abs(left) + Math.abs(right)) * -1;
  } else {
    if (isTarget(root)) {
      return left + right + 1;
    } else {
      return -1 * (left + right);
    }
  }
};

function isTarget(root) {
  return (
    (root.right === null || root.right.val == root.val) &&
    (root.left === null || root.left.val == root.val)
  );
}
// [7,82,82,-79,98,98,-79,-79,null,-28,-24,-28,-24,null,-79,null,97,65,-4,null,3,-4,65,3,null,97]
