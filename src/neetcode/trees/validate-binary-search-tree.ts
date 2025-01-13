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

// "boolean | undefined" again???
function myIsValidBST(root: TreeNode): boolean | undefined {
  if (!root.val) return false;

  function dfs(node: TNode) {
    if (!node) {
      return;
    }

    let isLeft: boolean = false;
    let isRight: boolean = false;

    // how this is possible, they should be number, aren't they? (node.left.val instead of node.left)
    if (node.left! < root && node.left!.val > -Infinity) {
      isLeft = true;
    }

    // same here?!?!?
    if (node.right! > root && node.right!.val > Infinity) {
      isRight = true;
    }

    dfs(node.left);
    dfs(node.right);

    return (isLeft && isRight);
  }

  return dfs(root);
}

function isValidBST(root: TreeNode): boolean {
  function dfs(
    node: TreeNode,
    left: number,
    right: number,
  ): boolean {
    if (!node) {
      return true;
    }

    // check this error
    if (node.val <= left || node.val >= right) {
      return false;
    }

    // check null error
    return (
      dfs(node.left!, left, node.val) &&
      dfs(node.right!, node.val, right)
    );
  }

  return dfs(root, -Infinity, Infinity);
}

const root = new TreeNode(2);

root.left = new TreeNode(1);
root.right = new TreeNode(3);

isValidBST(root);

const root2 = new TreeNode(5);

root.left = new TreeNode(1);

root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

isValidBST(root2);
