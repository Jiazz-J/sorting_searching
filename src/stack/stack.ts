import {Node} from './node';

class Stack {
  first: Node | null = null;
  last: Node | null = null;
  size = 0;

  // Adds element at the beginning
  push(val: number) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    return ++this.size;
  }

  // Removes element at the beginning
  pop() {
    if (!this.first) {
      return null;
    } else {
      const node = this.first;
      this.first = node.next;
      node.next = null;
      this.size--;

      if (!this.size) {
        this.last = null;
      }

      return node;
    }
  }
}

const stack = new Stack();
console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));

console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
