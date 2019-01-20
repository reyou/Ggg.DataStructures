// ============================================================================
// Find a Mother Vertex in a Graph
// https://www.youtube.com/watch?v=gTt5idzVCgA
// http://www.geeksforgeeks.org/find-a-mother-vertex-in-a-graph/
// A mother vertex in a graph G = (V,E) is a vertex v such that all other 
// vertices in G can be reached by a path from v.
// There can be more than one mother vertices in a graph. 

var findMother = function (g) {

}
var graph = function () {
    this.nodes = []
}

var nodeClass = function (data) {
    this.child = [];
    this.data = data;
}
var node0 = new nodeClass(0);
var node1 = new nodeClass(1);
var node2 = new nodeClass(2);
var node3 = new nodeClass(3);
var node4 = new nodeClass(4);
node0.child[0] = node3;
node0.child[1] = node2;
node1.child[0] = node0;
node2.child[0] = node1;
node3.child[0] = node4;
var g = new graph();
g.nodes.push(node0);
g.nodes.push(node1);
g.nodes.push(node2);
g.nodes.push(node3);
g.nodes.push(node4);
findMother(g);



