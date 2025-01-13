// import { TreeNode } from "@/neetcode/_data/Tree";

type LeftRightNode = TreeNode | null;

class TreeNode {
  public val: number;
  public left: LeftRightNode;
  public right: LeftRightNode;

  constructor(
    val?: number,
    left?: LeftRightNode,
    right?: LeftRightNode,
  ) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function isBalanced(root: TreeNode): boolean {
  if (!root) {
    return true;
  }

  function dfs(root: TreeNode): [boolean, number] {
    if (!root) {
      return [true, 0];
    }

    // let left = dfs(root.left!);
    // let right = dfs(root.right!);

    let left: [boolean, number] = dfs(root.left!);
    let right: [boolean, number] = dfs(root.right!);

    // help here from @NeetCode
    const balance =
      left[0] &&
      right[0] &&
      (Math.abs(left[1] - right[1]) <= 1);

    return [balance, 1 + Math.max(left[1], right[1])];
  }

  return dfs(root)[0];
}

const tree = new TreeNode(3);

tree.left = new TreeNode(9);
tree.right = new TreeNode(20);

tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

isBalanced(tree);
