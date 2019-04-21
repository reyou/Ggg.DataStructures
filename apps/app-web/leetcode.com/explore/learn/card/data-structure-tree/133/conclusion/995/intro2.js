var serialize = function(root) {
  let queue = [],
    ret = [];
  queue.push(root);
  while (queue.length) {
    let tmpNode = queue.pop();
    if (tmpNode) {
      ret.push(tmpNode.val);
      queue.push(tmpNode.right);
      queue.push(tmpNode.left);
    } else {
      ret.push(null);
    }
  }

  return ret;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data.length === 0) {
    return null;
  }

  const deserializeRec = function(nodeList) {
    if (nodeList.length === 0) {
      return null;
    }

    let rootVal = nodeList.shift();
    if (rootVal === null) {
      return null;
    } else {
      let rootNode = new TreeNode(rootVal);
      rootNode.left = deserializeRec(nodeList);
      rootNode.right = deserializeRec(nodeList);
      return rootNode;
    }
  };

  return deserializeRec(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
