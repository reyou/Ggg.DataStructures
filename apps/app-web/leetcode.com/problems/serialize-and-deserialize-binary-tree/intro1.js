var serialize = function(root) {
  let queue = [];
  let result = [];
  queue.push(root);
  while (queue.length) {
    let tmpNode = queue.pop();
    if (tmpNode) {
      result.push(tmpNode.val);
      queue.push(tmpNode.right);
      queue.push(tmpNode.left);
    } else {
      result.push(null);
    }
  }

  return result;
};

var deserialize = function(data) {
  if (data.length === 0) {
    return null;
  }
  return deserializeRec(data);
};
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
