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

function diameterOfBinaryTree(root: TNode): number {
  let res: number = 0;

  function dfs(root: TNode): number {
    if (!root) {
      return -1;
    }

    let left: number = dfs(root.left);
    let right: number = dfs(root.right);

    res = Math.max(res, 2 + left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return res;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);

diameterOfBinaryTree(root);
