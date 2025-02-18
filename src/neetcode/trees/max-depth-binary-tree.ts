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

function myTryMaxDepth(root: TNode): number {
  if (!root) {
    return 0;
  }

  let countLeft: number = 0;
  let countRight: number = 0;

  if (!root.left) {
    countLeft++;
    myTryMaxDepth(root.left);
  }

  if (!root.right) {
    countRight++;
    myTryMaxDepth(root.right);
  }

  return countLeft > countRight ? countLeft : countRight;
}

function maxDepth(root: TNode): number {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

const root: TreeNode = new TreeNode(4);

root.left = new TreeNode(9);

root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

maxDepth(root);
