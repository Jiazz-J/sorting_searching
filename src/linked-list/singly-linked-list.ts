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
    }

    if (this.length === 0) {
      this.tail = null;
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(10);
singlyLinkedList.push(20);
singlyLinkedList.push(30);

console.log(singlyLinkedList.length);
singlyLinkedList.traverse();
singlyLinkedList.pop();
singlyLinkedList.traverse();
