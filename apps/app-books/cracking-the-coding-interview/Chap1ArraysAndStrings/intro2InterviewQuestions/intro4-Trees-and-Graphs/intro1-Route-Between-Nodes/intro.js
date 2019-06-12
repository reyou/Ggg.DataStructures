function buildUnDirectedGraph(count) {
  let nodes = [];
  for (let i = 1; i <= count; i++) {
    let node = {
      val: i,
      children: []
    };
    nodes.push(node);
  }
  for (let i = 0; i < nodes.length; i++) {
    let currentNode = nodes[i];
    // select random count of children
    var min = 1;
    var max = 3;
    let randomChildrenCount = Math.floor(Math.random() * (+max - +min)) + +min;
    let indexes = [];
    for (let j = 0; j < randomChildrenCount; j++) {
      max = count - 1;
      let randomIndex = Math.floor(Math.random() * (+max - +min)) + +min;
      indexes[randomIndex] = randomIndex;
    }
    for (let k = 0; k < indexes.length; k++) {
      if (indexes[k]) {
        currentNode.children.push(nodes[k]);
      }
    }
  }
  return nodes;
}

function printTree(node) {
  let builder = "";
  // BFS
  let childrenQ = [];
  childrenQ.push(node);
  while (true) {
    if (childrenQ.length == 0) {
      break;
    }
    let child = childrenQ.pop();
    child.visited = true;
    builder += child.val + " => ";
    let children = child.children;
    let anyPush = false;
    for (let i = 0; i < children.length; i++) {
      if (children[i].visited) {
      } else {
        anyPush = true;
        childrenQ.push(children[i]);
      }
    }
    if (!anyPush) {
      builder += "\n";
    }
  }
  console.log(builder);
}
let nodes = buildUnDirectedGraph(20);
printTree(nodes[0]);
function findPath() {
  return false;
}
let result = findPath(root, 4, 8);
console.log(result);
