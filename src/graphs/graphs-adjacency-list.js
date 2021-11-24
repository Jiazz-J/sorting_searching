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

  dfsRecursive(vertex) {
    const result = [];

    this.dfs(vertex, result);

    return result;
  }

  dfs(vertex, result) {
    if (!vertex) {
      return;
    }

    result.push(vertex);

    for (const neighbourVertex of this.adjacencyList.get(vertex)) {
      if (!result.includes(neighbourVertex)) {
        this.dfs(neighbourVertex, result);
      }
    }
  }

  // Could have used extra data structure map to store visisted nodes and gives constant lookups
  dfsIterative(start) {
    const stack = [];
    const result = [];
    stack.push(start);

    while (stack.length) {
      const vertex = stack.pop();
      if (!result.includes(vertex)) {
        result.push(vertex);

        for (const neighbour of this.adjacencyList.get(vertex)) {
          stack.push(neighbour);
        }
      }
    }

    return result;
  }

  bfsIterative(start) {
    const queue = [];
    const result = [];
    queue.push(start);

    while (queue.length) {
      const vertex = queue.shift();

      if (!result.includes(vertex)) {
        result.push(vertex);

        for (const neighbour of this.adjacencyList.get(vertex)) {
          queue.push(neighbour);
        }
      }
    }

    return result;
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.dfsRecursive('A'));

console.log(g.dfsIterative('A'));

console.log(g.bfsIterative('A'));

/* const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Delhi');
console.log(g.adjacencyList);
g.addEdge('Tokyo', 'Delhi');
console.log(g.adjacencyList);
//g.removeEdge('Tokyo', 'Delhi');
g.removeVertex('Delhi');
console.log(g.adjacencyList);
 */
