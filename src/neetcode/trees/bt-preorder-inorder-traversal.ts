// check: https://www.youtube.com/watch?v=vm63HuIU7kw

// import { TreeNode } from "@/neetcode/_data/Tree";

type LeftRightNode = TreeNode | null;

class TreeNode {
  public val: number;
  public left: LeftRightNode;
  public right: LeftRightNode;

  constructor(
    val?: number,
    left?: TreeNode,
    right?: TreeNode,
  ) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  let root: TreeNode = new TreeNode(preorder[0]);
  let mid: number = inorder.indexOf(preorder[0]);

  root.left = buildTree(
    preorder.slice(1, mid + 1),
    inorder.slice(0, mid),
  );

  root.right = buildTree(
    preorder.slice(mid + 1),
    inorder.slice(mid + 1),
  );

  return root;
}

const preorder1: number[] = [3, 9, 20, 15, 7];
const inorder1: number[] = [9, 3, 15, 20, 7];

buildTree(preorder1, inorder1);
