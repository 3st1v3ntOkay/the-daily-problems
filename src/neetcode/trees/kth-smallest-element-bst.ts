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

// check where "undefined" value comes
function kthSmallest(
  root: TNode,
  k: number,
): number | undefined {
  let n: number = 0;
  let stack: TNode[] = [];
  let current: TNode = root;

  // help with conditional from @brogrammer-codes
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    // check error
    current = stack.pop()!;
    n += 1;

    if (n === k) {
      return current.val;
    }

    current = current.right;
  }
}

const k: number = 1;
const root: TreeNode = new TreeNode(3);

root.left = new TreeNode(1);
root.left.left = new TreeNode();
root.left.right = new TreeNode(2);

root.right = new TreeNode(4);

kthSmallest(root, k);
