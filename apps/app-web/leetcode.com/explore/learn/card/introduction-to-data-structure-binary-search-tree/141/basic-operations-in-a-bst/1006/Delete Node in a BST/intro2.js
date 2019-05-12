var deleteNode = function(root, key) {
  if (root == null) {
    return null;
  }
  // search left
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  // search right
  else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  }
  // target found
  else {
    // target is a leaf (dead end node)
    if (root.left == null && root.right == null) {
      root = null;
    }
    // target has right child
    else if (root.right) {
      let successor = function(root2) {
        let temp = root2.right;
        while (temp.left) {
          temp = temp.left;
        }
        return temp.val;
      };
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    }
    // target has left child
    else {
      let predecessor = function(root2) {
        let temp = root2.left;
        while (temp.right) {
          temp = temp.right;
        }
        return temp.val;
      };
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }
  return root;
};

console.log(
  deleteNode(
    { val: 1, right: { val: 2, right: null, left: null }, left: null },
    2
  )
);
console.log(
  deleteNode(
    {
      val: 5,
      right: {
        val: 6,
        right: {
          val: 7,
          right: null,
          left: null
        },
        left: null
      },
      left: {
        val: 3,
        right: { val: 4, right: null, left: null },
        left: { val: 2, right: null, left: null }
      }
    },
    3
  )
);
