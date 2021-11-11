import {Node} from './node';

class Queue {
  first: Node | null = null;
  last: Node | null = null;
  size = 0;

  enqueue(val: number) {
    const node = new Node(val);
    if (!this.last) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    } else {
      const node = this.first;
      this.first = node.next;
      node.next = null;
      this.size--;
      if (!this.size) {
        this.first = null;
        this.last = null;
      }
      return node;
    }
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue);
console.log(queue.dequeue());
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
