export class Node {
  val!: number;
  next?: Node | null;
  prev?: Node | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
