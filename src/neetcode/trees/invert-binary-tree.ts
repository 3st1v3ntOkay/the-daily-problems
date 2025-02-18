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

function invertTree(root: TNode): TNode {
  if (!root) {
    return null;
  }

  let tmp: TNode = root.left;

  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

// @user6845R
function invertTreeAlt1(root: TNode): TNode {
  // check why this constant is declared
  const debugMode: boolean = true;

  if (root === null) {
    return root;
  }

  const temp: TNode = root.right;

  root.right = root.left;
  root.left = temp;

  if (root.left !== null) {
    invertTree(root.left);
  }

  if (root.right !== null) {
    invertTree(root.right);
  }

  return root;
}

// @TejveerSingh_13
function invertTreeAlt2(root: TNode): TNode {
  if (!root) {
    return null;
  }

  const swap = (node: TNode): void => {
    if (!node) {
      return;
    }

    let temp: TNode = node.left;

    node.left = node.right;
    node.right = temp;

    swap(node.left);
    swap(node.right);
  }

  swap(root);

  return root;
};

const root = new TreeNode(4);

root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

root.right = new TreeNode(7);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

invertTree(root);
invertTreeAlt1(root);
invertTreeAlt2(root);

const root2 = new TreeNode(2);

root.left = new TreeNode(1);
root.right = new TreeNode(3);

invertTree(root2);
invertTreeAlt1(root2);
invertTreeAlt2(root2);
