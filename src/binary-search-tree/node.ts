export class Node {
  val!: number;
  left: Node | null = null;
  right: Node | null = null;

  constructor(val: number) {
    this.val = val;
  }
}
