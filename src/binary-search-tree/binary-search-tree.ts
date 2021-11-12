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

  remove(val: number) {
    let current: Node | null = this.root;

    let parent = null;

    while (current) {
      if (current.val === val) {
        if (this.isLeaf(current)) {
          this.removeNodeLeaf(parent);
        } else if (this.hasOneChild(current!)) {
          this.removeNodeWithOneChild(parent, current);
        } else {
          //
        }
        console.log('Is Leaf ', this.isLeaf(current!));
        console.log(' has One child ', this.hasOneChild(current!));

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

  private removeNodeLeaf(parent: Node | null) {
    if (!parent) {
      this.root = null;
    } else {
      parent.left = null;
      parent.right = null;
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
}

const bst = new BinarySearchTree();
bst.insert(10);
console.log(bst);
bst.insert(20);
bst.insert(8);
bst.insert(78);
bst.insert(88);
bst.insert(89);
bst.remove(10);
console.log(JSON.stringify(bst, null, 2));

/* console.log(bst);

console.log(bst.find(20));
console.log(bst.find(1)); */

/*

                                    10
                                  8   20
                                        78
                                          88
                                            89

 */

/* const tree = JSON.parse(
  '{"root":{"left":{"left":null,"right":null,"val":8},"right":{"left":null,"right":{"left":null,"right":{"left":null,"right":{"left":null,"right":null,"val":89},"val":88},"val":78},"val":20},"val":10}}'
);

console.log(tree); */

// Remove a leaf node
// Store parent and set its removal node reference to null

// Remove a node which has only one child
// Store parent, store removed node left or right reference
// Assign this child reference of removing node to parent
