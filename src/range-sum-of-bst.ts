//Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let sum = 0;

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  dfs(root, low, high);

  return sum;
}

function dfs(node: TreeNode | null, low: number, high: number) {
  if (node === null) {
    return;
  }

  const value = node.val;

  //  sum+=value>= low && value<=high ? value : 0;
  if (low <= value && value <= high) {
    sum = sum + value;
  }

  dfs(node.left, low, high);
  dfs(node.right, low, high);
}

// We may need global variable

// Pre-order

// root
// left
// right

// if(root===null){
//     return;
// }

//Check value is in range then add
