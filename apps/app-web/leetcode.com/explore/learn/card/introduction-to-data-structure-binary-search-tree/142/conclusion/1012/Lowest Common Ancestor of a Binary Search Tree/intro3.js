// Lowest Common Ancestor must sit between p and q
// p < Lowest Common Ancestor < q
var lowestCommonAncestor = (root, p, q) => {
  // Lowest Common Ancestor bigger than both p and q so we move left
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  // Lowest Common Ancestor small than both p and q so we move right
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};

console.log(
  lowestCommonAncestor(
    {
      val: 6,
      right: {
        val: 8,
        right: { val: 9, right: null, left: null },
        left: { val: 7, right: null, left: null }
      },
      left: {
        val: 2,
        right: {
          val: 4,
          right: { val: 5, right: null, left: null },
          left: { val: 3, right: null, left: null }
        },
        left: { val: 0, right: null, left: null }
      }
    },
    2,
    8
  )
);
