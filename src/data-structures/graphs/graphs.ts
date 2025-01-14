export class Graph {
  constructor(public adjacencyList: Record<string, string[]> = {}) {}

  addVertex(name: string) {
    const hasKey = this.adjacencyList[name];

    if (hasKey) return;

    this.adjacencyList[name] = [];
  }

  addEdge(v1: string, v2: string) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1: string, v2: string) {
    const removedV1 = this.adjacencyList[v1].filter((vertex) => vertex !== v2);

    this.adjacencyList[v1] = removedV1;

    const removedV2 = this.adjacencyList[v2].filter((vertex) => vertex !== v1);

    this.adjacencyList[v2] = removedV2;
  }

  removeVertex(vertex: string) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      if (adjacentVertex) {
        this.removeEdge(vertex, adjacentVertex);
      }
    }

    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B");

g.removeEdge("A", "B");

console.log(g);
