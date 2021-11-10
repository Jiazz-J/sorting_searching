import {Node} from './node';

class DoublyLinkedList {
  head?: Node | null;
  tail?: Node | null;
  length = 0;

  // Adds element at the end
  push(val: number) {
    const node = new Node(val);

    if (this.head && this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  // Removes element at the end of the list
  pop() {
    if (!this.tail) {
      return null;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const poppedNode = this.tail;
      this.tail = poppedNode.prev;
      this.tail!.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(10);

console.log(doublyLinkedList);

doublyLinkedList.push(20);

console.log(doublyLinkedList);
