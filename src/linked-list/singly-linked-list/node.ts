export class Node {
  val!: number;
  next?: Node | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}
