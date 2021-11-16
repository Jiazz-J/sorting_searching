import {Node} from './node';

class BinarySearchTree {
  root: Node | null = null;

  insert(val: number) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current: Node | null = this.root;

    while (current) {
      if (current.val > val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          return;
        }
      } else if (current.val < val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          return;
        }
      } else {
        return;
      }
    }
  }

  find(val: number) {
    if (!this.root) {
      return null;
    }

    let current: Node | null = this.root;

    while (current) {
      if (current.val === val) {
        return current;
      } else if (current.val > val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  remove(val: number, node?: Node | null) {
    let current: Node | null = node || this.root;

    let parent = null;

    while (current) {
      if (current.val === val) {
        if (this.isLeaf(current)) {
          this.removeLeafNode(parent, val);
        } else if (this.hasOneChild(current!)) {
          this.removeNodeWithOneChild(parent, current);
        } else {
          this.removeNodeWithTwoChildren(current);
        }

        break;
        //return current;
      } else if (current.val > val) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }
  }

  isLeaf(current: Node) {
    return !current.left && !current.right;
  }

  hasOneChild(current: Node) {
    return (current.left && !current.right) || (current.right && !current.left);
  }

  private removeLeafNode(parent: Node | null, val: number) {
    if (!parent) {
      this.root = null;
    } else {
      if (parent.left?.val === val) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
  }

  private removeNodeWithOneChild(parent: Node | null, current: Node) {
    const childNode = current.left ? current.left : current.right;

    if (parent) {
      if (parent.left) {
        parent.left = childNode;
      } else {
        parent.right = childNode;
      }
    } else {
      this.root = childNode;
    }
  }

  private removeNodeWithTwoChildren(current: Node) {
    const [minNode, parentMinNode] = this.findMinValueNode(current)!;

    if (minNode && parentMinNode) {
      const minValue = minNode.val;
      this.remove(minValue, current);
      current.val = minValue;
    }
  }

  private findMinValueNode(node: Node) {
    let min = node.val;
    let minNode;
    let parentNode;
    let current: Node | null = node;
    while (current) {
      if (current.val < min) {
        min = current.val;
        minNode = current;
      }
      parentNode = current.left || parentNode;
      current = current.left;
    }

    return [minNode, parentNode];
  }

  printValues(arr: (Node | undefined)[] | null) {
    arr?.forEach(ele => console.log(ele?.val));
  }

  // Traversals
  // Breadth first Search uses queues
  // Enqueue node and dequeue it after adding child nodes of it
  // dequeued nodes can be saved to an array
  bfs() {
    if (!this.root) {
      return null;
    }

    const queue = [this.root];
    const visited = [];
    let node;

    while (queue.length) {
      node = queue.shift();
      visited.push(node);
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }

    return visited;
  }

  dfsPreOrder() {
    const visited: Node[] = [];
    if (this.root) {
      this.recDfsPreOrder(this.root, visited);
    }

    return visited;
  }

  private recDfsPreOrder(node: Node | null, visited: Node[]) {
    if (node) {
      visited.push(node);
      this.recDfsPreOrder(node.left, visited);
      this.recDfsPreOrder(node.right, visited);
    }
  }

  dfsPostOrder() {
    const visited: Node[] = [];
    if (this.root) {
      this.recDfsPostOrder(this.root, visited);
    }

    return visited;
  }

  private recDfsPostOrder(node: Node | null, visited: Node[]) {
    if (node) {
      this.recDfsPostOrder(node.left, visited);
      this.recDfsPostOrder(node.right, visited);
      visited.push(node);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(10);

bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);

bst.insert(20);
//bst.insert(81);
//bst.insert(99);
//bst.remove(88);

//bst.printValues(bst.bfs());
bst.printValues(bst.dfsPostOrder());
/*

                                    10
                                  8   20
                                        78
                                          88
                                            89



                                            10
8
20
6
9
88
99

 const tree = JSON.parse(
  '{"root":{"left":{"left":null,"right":null,"val":8},"right":{"left":null,"right":{"left":null,"right":{"left":null,"right":{"left":null,"right":null,"val":89},"val":88},"val":78},"val":20},"val":10}}'
);


// Remove a leaf node
// Store parent and set its removal node reference to null

// Remove a node which has only one child
// Store parent, store removed node left or right reference
// Assign this child reference of removing node to parent

// Remove a node which has two children
// find the node, find the minimun value in the right subtree
// swap values of current min value
// delete the node with min value
*/
