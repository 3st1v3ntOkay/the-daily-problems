// import { TreeNode } from "@/neetcode/_data/Tree";

type TNode = TreeNode | null;

class TreeNode {
  public val: number;
  public left: TNode;
  public right: TNode;

  constructor(
    val?: number,
    left?: TNode,
    right?: TNode,
  ) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

// check the whole structure and reread the problem itself
function mylowestCommonAncestor(
  root: TreeNode,
  p: TreeNode,
  q: TreeNode,
): number {
  if (!root) {
    return -1;
  }

  let tempParent: number = root.val;

  function dfs(root) {
    if (p === root.left) return;
    if (q === root.right) return;

    let tempLeft = root.parent;
    let tempRight = root.parent;

    if (root.left.val === tempLeft && root.left.left === tempRight) return;

    const n1 = 1 + dfs(root.left)
    const n2 = 1 + dfs(root.right)
    return n1, n2;
  }

  if (p !== q) {
    dfs(root)
  }

  return -1;
}

// check the whole structure and reread the problem itself
function lowestCommonAncestor(
  root: TreeNode,
  p: TreeNode,
  q: TreeNode,
): TreeNode | undefined {
  let current: TNode = root;

  while (current) {
    if (p.val > current.val && q.val > current.val) {
      current = current.right
    }
    else if (p.val < current.val && q.val < current.val) {
      current = current.left
    }
    else {
      return current
    }
  }
}

const p: number = 2;
const q: number = 8;

const root: TreeNode = new TreeNode(4);

root.left = new TreeNode(2);

root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

root.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

lowestCommonAncestor(root, p, q);

const p2: number = 2;
const q2: number = 4;
lowestCommonAncestor(root, p2, q2);

const p3: number = 2;
const q3: number = 1;
const root2 = new TreeNode(2);

root2.left = new TreeNode(1);

lowestCommonAncestor(root2, p3, q3);
