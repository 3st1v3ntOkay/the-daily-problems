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

function rightSideView(root: TreeNode): number[] {
  let res: number[] = [];
  let queue: TreeNode[] = [];

  queue.push(root);

  while (queue.length) {
    let queueLength: number = queue.length;
    let rightSide: TreeNode | null = null;

    for (let i = 0; i < queueLength; i++) {
      let node: TreeNode | null | undefined = queue.shift();

      if (node) {
        rightSide = node;

        // check null error
        queue.push(node.left!);
        queue.push(node.right!);
      }
    }

    if (rightSide) {
      res.push(rightSide.val)
    }
  }

  return res;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode();
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right = new TreeNode();
root.right = new TreeNode(4);

rightSideView(root);

const root2 = new TreeNode(1);
root2.left = new TreeNode();
root2.right = new TreeNode(3);

rightSideView(root2);

const root3 = new TreeNode();
rightSideView(root3);
