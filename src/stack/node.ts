export class Node {
  val!: number;
  next: Node | null = null;

  constructor(val: number) {
    this.val = val;
  }
}
