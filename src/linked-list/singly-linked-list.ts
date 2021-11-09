import {Node} from './node';

class SinglyLinkedList {
  head?: Node | null;
  tail?: Node | null;
  length = 0;

  push(val: number) {
    const node = new Node(val);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  pop(): Node | null | undefined {
    if (!this.tail) {
      return null;
    }

    let current = this.head;
    let previous = current;

    while (current?.next) {
      previous = current;
      current = current.next;
    }

    this.tail = previous ? (previous.next = null) : previous;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  traverse(): void {
    let current = this.head;
    while (current) {
      console.log('Value: ', current.val);
      current = current.next;
    }
  }

  // removes element at the beginning
  shift() {
    if (this.head) {
      const start = this.head;
      this.head = start.next;
      this.length--;
    }

    if (this.length === 0) {
      this.tail = null;
    }
  }

  // adds element to the beginning o
  unshift(val: number): number {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }

    return this.length;
  }

  get(index: number): Node | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current;
      }

      count++;
      current = current.next;
    }

    return null;
  }

  set(index: number, val: number) {
    const node = this.get(index);
    if (node) {
      node.val = val;
    }
  }

  insert(index: number, val: number) {
    if (index === 0) {
      this.unshift(val);
      return;
    }

    if (index === this.length - 1) {
      this.push(val);
      return;
    }

    const previous = this.get(index - 1);

    if (previous) {
      const node = new Node(val);
      const current = previous.next;
      previous.next = node;
      node.next = current;
      this.length++;
    }
  }

  remove(index: number) {
    if (index === 0) {
      this.shift();
      return;
    }

    if (index === this.length - 1) {
      this.pop();
      return;
    }

    const previous = this.get(index - 1);

    if (previous) {
      const current = previous.next;
      previous.next = current?.next;
      this.length--;
    }
  }

  reverse() {
    // Construct tail
    // save upcoming next -- to traverse
    // temp.next = reverse and change tail to current
    // upcoming next should be changed to tail

    let current = this.head;
    let reverse = null;

    while (current) {
      const temp = current;
      const nextNode = current.next;
      temp.next = reverse;
      reverse = temp;
      current = nextNode;
    }

    this.head = reverse;
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(10);
singlyLinkedList.push(20);
singlyLinkedList.push(30);

/* console.log(singlyLinkedList.length);
singlyLinkedList.traverse();
singlyLinkedList.pop();
singlyLinkedList.traverse(); */

/* singlyLinkedList.unshift(5);
singlyLinkedList.unshift(0);

singlyLinkedList.traverse();

console.log(singlyLinkedList.get(2));

singlyLinkedList.set(2, 500);


singlyLinkedList.insert(2, 40);
singlyLinkedList.traverse(); */

singlyLinkedList.traverse();
console.log('-------');

singlyLinkedList.reverse();
singlyLinkedList.traverse();
