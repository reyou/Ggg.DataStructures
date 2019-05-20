var isSameTree = function(p, q) {
  if (p == null && q == null) {
    return true;
  }
  let q1 = [];
  let q2 = [];
  q1.push(p);
  q2.push(q);
  while (true) {
    let root1 = undefined;
    let root2 = undefined;
    if (q1.length > 0) {
      root1 = q1.pop();
    }
    if (q2.length > 0) {
      root2 = q2.pop();
    }
    if (root1 !== root2) {
      return false;
    } else if (root1 == null || root2 == null) {
      return false;
    }
    if (root1.val != root2.val) {
      return false;
    }
    while (root1.left !== undefined) {
      q1.push(root1.left);
      root1 = root1.left;
    }
    while (root2.left !== undefined) {
      q2.push(root2.left);
      root2 = root2.left;
    }
    if (root1.right !== undefined) {
      q1.push(root1.right);
    }
    if (root2.right !== undefined) {
      q2.push(root2.right);
    }
  }
};
