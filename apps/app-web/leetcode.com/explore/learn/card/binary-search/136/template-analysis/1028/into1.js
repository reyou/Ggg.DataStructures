let closestValue = function(root, target) {
  let child = target < root.val ? root.left : root.right;

  if (!child) {
    return root.val;
  }

  let closest = closestValue(child, target);
  if (Math.abs(closest - target) < Math.abs(root.val - target)) {
    return closest;
  }
  return root.val;
};
