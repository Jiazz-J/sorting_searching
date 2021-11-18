import {Node} from './node';

class PriorityQueue {
  values!: Node[];
  constructor() {
    this.values = [];
  }

  // Priority with the minimum value should be at the top
  enqueue(node: Node) {
    this.values.push(node);
    this.bubbleDown(this.values.length - 1);
  }

  private bubbleDown(index: number) {
    if (index > 0) {
      const parentIndex = Math.floor(index - 1 / 2);
      const parentNode = this.values[parentIndex];
      const node = this.values[index];
      if (node.priority < parentNode.priority) {
        this.swap(index, parentIndex);
        this.bubbleDown(parentIndex);
      } else {
        return;
      }
    }
  }

  private swap(index: number, index_2: number) {
    [this.values[index], this.values[index_2]] = [
      this.values[index_2],
      this.values[index],
    ];
  }

  dequeue() {
    if (this.values.length > 0) {
      this.swap(0, this.values.length - 1);
      const priorityNode = this.values.pop();

      this.bubbleUp(0);
      return priorityNode;
    }
    return null;
  }

  private bubbleUp(index: number) {
    const indx = 2 * index;
    if (indx + 1 < this.values.length) {
      const child_1 = this.values[indx + 1];
      let child_2;
      if (indx + 2 <= this.values.length) {
        child_2 = this.values[indx + 2];
      }
      const minPriorityIndex =
        child_2 && child_1.priority > child_2.priority ? indx + 2 : indx + 1;

      if (
        this.values[minPriorityIndex].priority < this.values[index].priority
      ) {
        this.swap(index, minPriorityIndex);
        this.bubbleUp(minPriorityIndex);
      } else {
        return;
      }
    } else {
      return;
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(new Node('should be at last', 10));
priorityQueue.enqueue(new Node('should be at ', 4));
priorityQueue.enqueue(new Node('should be at ', 8));
priorityQueue.enqueue(new Node('should be at ', 2));
console.log(priorityQueue.values);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

console.log(priorityQueue.values);
