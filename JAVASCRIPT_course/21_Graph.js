/*🧩 A Graph is a non-linear data structure that consists of nodes/vertices and edges which connects them.

Usage: 
Google Maps - where Cities(Nodes) and Roads(Edges)
SocialMedia sites - where users/group/page = (node) and where links/join a group/like a page = a new (edge) is created for that relationship

🧩 Graph Representation:
Graphs are commonly represented in two ways:
1. Adjacency Matrix - An adjacency matrix is a 2D array of V x V vertices. Each row and column represent a vertex.
        B
       / \
      A   C

const matrix = [
    [0, 1, 0],          //A is not connected to A, connected to B and not to C
    [1 ,0, 1],
    [0, 1, 0]
]

2. Adjacency List - Vertices are stored in a map like data structure and every vertex stores a list of its adjacent vertices (more efficient bcz inserting and searching O(1) whereas in matrix its O(n)). Can store weight of edges
        B
       / \
      A   C

const adjacent = {
    'A' : ['B'],
    'B' : ['A', 'B'],
    'C' : ['B']
}
*/


class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A", "B")
graph.addEdge("B", "C")