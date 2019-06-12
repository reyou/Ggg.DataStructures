/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  let Node = function(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
  };
  let nodes = [];
  let stack = [];
  stack.push(node);
  while (stack.length > 0) {
    let cur = stack.pop();
    let newNode = new Node(cur.val, []);
    if (!nodes[parseInt(cur["$id"])]) {
      // visited
      nodes[parseInt(cur["$id"])] = newNode;
    }
    for (let i = 0; i < cur.neighbors.length; i++) {
      let n = cur.neighbors[i];
      newNode.neighbors.push(new Node(n.val, []));
      stack.push(n);
    }
  }
  return node;
};

let input = {
  $id: "1",
  neighbors: [
    {
      $id: "2",
      neighbors: [
        { $ref: "1" },
        {
          $id: "3",
          neighbors: [
            { $ref: "2" },
            { $id: "4", neighbors: [{ $ref: "3" }, { $ref: "1" }], val: 4 }
          ],
          val: 3
        }
      ],
      val: 2
    },
    { $ref: "4" }
  ],
  val: 1
};

let res = cloneGraph(input);
console.log(res);
