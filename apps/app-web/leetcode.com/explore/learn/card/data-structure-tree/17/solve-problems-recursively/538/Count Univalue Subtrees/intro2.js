var countUnivalSubtrees = function(root) {
  var ans = 0;

  function isUnival(root) {
    if (root == null) {
      return false;
    }
    var leftIsUnival;
    var rightIsUnival;

    if (root.left) {
      leftIsUnival = isUnival(root.left);
    }
    if (root.right) {
      rightIsUnival = isUnival(root.right);
    }
    if (root.left && (root.val !== root.left.val || !leftIsUnival))
      return false;
    if (root.right && (root.val !== root.right.val || !rightIsUnival))
      return false;

    ans += 1;
    return true;
  }
  isUnival(root);
  return ans;
};
// [7,82,82,-79,98,98,-79,-79,null,-28,-24,-28,-24,null,-79,null,97,65,-4,null,3,-4,65,3,null,97]
