var treeToDoublyList = function(root) {
  let head = null;
  let prev;

  if (!root) {
    return root;
  }

  function inOrder(node) {
    if (!node) {
      return;
    }

    inOrder(node.left);
    if (!head) {
      head = node;
      prev = node;
    } else {
      node.left = prev;
      prev.right = node;
      prev = node;
    }

    inOrder(node.right);
  }

  inOrder(root);
  prev.right = head;
  head.left = prev;

  return head;
};
