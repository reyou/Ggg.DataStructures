var lowestCommonAncestor = function(root, p, q) {
  let result = resolve(root, p, q);
  return result;
};

// bottom up approach. Sweep through from bottom
// and if you hit a target return it to parent.
function resolve(root, p, q) {
  if (!root) {
    return null;
  }
  if (root.val == p.val || root.val == q.val) {
    // if we hit a target return it to previous stack call.
    return root;
  }
  let node1 = resolve(root.left, p, q);
  let node2 = resolve(root.right, p, q);
  // if targets are coming from left and right, then it means
  // ancestor is at the top (root)
  if (node1 && node2) {
    return root;
  }
  // both targets are on same branch, so return which ever is on top
  // meaning it was overriden at line 14
  else if (node1) {
    return node1;
  }
  return node2;
}
