var generateTrees = function(n) {
  if (n == 0) {
    return [];
  }
  let start = 1;
  let end = n;
  let memory = [];
  let result = resolve(start, end, memory);
  return result;
};

function resolve(start, end, memory) {
  let results = [];
  if (memory[start] && memory[start][end]) {
    return memory[start][end];
  }
  if (start > end) {
    return [null];
  }
  for (let i = start; i <= end; i++) {
    let lefts = resolve(start, i - 1, memory);
    let rights = resolve(i + 1, end, memory);
    for (let left of lefts) {
      for (let right of rights) {
        let node = new TreeNode(i);
        node.left = left;
        node.right = right;
        results.push(node);
      }
    }
  }
  memory[start] = [];
  memory[start][end] = results;
  return results;
}
