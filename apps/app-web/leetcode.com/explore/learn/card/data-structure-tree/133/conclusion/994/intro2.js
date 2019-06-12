var connect = function(root) {
  if (!root || !root.left) {
    return root;
  }

  root.left.next = root.right;
  if (root.next) {
    root.right.next = root.next.left;
  }

  connect(root.left);
  connect(root.right);
  return root;
};
