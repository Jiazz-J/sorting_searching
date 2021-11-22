//@ts-nocheck

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(val) {
    this.adjacencyList.set(val, []);
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).forEach((ele, index) => {
      if (ele === vertex2) {
        this.adjacencyList.get(vertex1).splice(index);
      }
    });

    /* this.adjacencyList.get(vertex2).forEach((ele, index) => {
      if (ele === vertex1) {
        this.adjacencyList.get(vertex2).splice(index);
      }
    }); */

    this.adjacencyList.set(
      vertex2,
      this.adjacencyList.get(vertex2).filter(ele => ele !== vertex1)
    );
  }

  removeVertex(vertex) {
    this.adjacencyList.get(vertex).forEach(ele => this.removeEdge(vertex, ele));
    this.adjacencyList.delete(vertex);
  }
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Delhi');
console.log(g.adjacencyList);
g.addEdge('Tokyo', 'Delhi');
console.log(g.adjacencyList);
//g.removeEdge('Tokyo', 'Delhi');
g.removeVertex('Delhi');
console.log(g.adjacencyList);
