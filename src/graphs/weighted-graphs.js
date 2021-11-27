class PriorityQueue {
  constructor() {
    this.list = [];
  }

  enqueue(node) {
    this.list.push(node);
    this.sort();
  }

  dequeue() {
    this.list.shift();
  }

  sort() {
    this.list.sort((a, b) => a.priority - b.priority);
  }
}
class WeightedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList.get(vertex1).push({node: vertex2, weight});
    this.adjacencyList.get(vertex2).push({node: vertex1, weight});
  }

  dijkstarsShortestPath(source, destination) {
    const distanceMap = new Map();
    const priorityQueue = new PriorityQueue();
    const routeMap = new Map();

    this.adjacencyList.forEach((edges, vertex) => {
      if (vertex === source) {
        distanceMap.set(vertex, 0);
        priorityQueue.enqueue({vertex, priority: 0});
      } else {
        distanceMap.set(vertex, Infinity);
        priorityQueue.enqueue({vertex, priority: Infinity});
      }

      routeMap.set(vertex, null);
    });

    console.log('Distance map ', distanceMap);
    console.log('priority queue ', priorityQueue);
    console.log('route map ', routeMap);
  }
}

const g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

console.log(g.adjacencyList);

g.dijkstarsShortestPath('A', 'F');
