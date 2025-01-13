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

function myGoodNodes(root: TNode): number {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  let times: number = 0;

  function dfs(root: TreeNode): void {
    if (root.left !== null) {
      if (root.left.val >= root.val) {
        times++;
      }
    }
    if (root.right !== null) {
      if (root.right.val >= root.val) {
        times++;
      }
    }

    // check the error
    dfs(root.left!);
    dfs(root.right!);
  }

  dfs(root);
  return times;
}

function goodNodes(root: TreeNode): number {
  function dfs(node: TreeNode, maxVal: number): number {
    if (!node) {
      return 0;
    }

    let res: number = 0;

    if (node.val >= maxVal) {
      res = 1;
    }

    maxVal = Math.max(maxVal, node.val);

    // check the error
    res += dfs(node.left!, maxVal)
    res += dfs(node.right!, maxVal)

    return res;
  }

  return dfs(root, root.val);
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.left.left = new TreeNode(3);

root.right = new TreeNode(4);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);

goodNodes(root);

const root2 = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(2);

goodNodes(root2);

const root3 = new TreeNode(1);
goodNodes(root3);
