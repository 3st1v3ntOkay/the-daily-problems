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

function isSubtree(
  root: TNode,
  subRoot: TNode,
): boolean {
  if (!subRoot) {
    return true;
  }

  if (!root) {
    return false;
  }

  function isSameTree(s: TNode, t: TNode): boolean {
    if (!s && !t) {
      return true;
    }

    if (s && t && s.val === t.val) {
      return (
        isSameTree(s.left, t.left) &&
        isSameTree(s.right, t.right)
      );
    }

    return false;
  }

  if (isSameTree(root, subRoot)) {
    return true;
  }

  return (
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}

// I was so close
function myIsSubtree(
  root: TNode,
  subRoot: TNode,
): boolean {
  if (!root && !subRoot) {
    return true;
  }

  if (!root || !subRoot) {
    return false;
  }

  function isSameTree(p: TNode, q: TNode): boolean {
    if (!p && !q) {
      return true;
    }

    if (!p || !q || p.val !== q.val) {
      return false;
    }

    return (
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }

  // my error was here
  if (subRoot.val === root.val) {
    isSameTree(subRoot, root)
  }
  // answer: if (isSameTree(subRoot, root)) return true

  return (
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}

const tree = new TreeNode(3);

tree.left = new TreeNode(4);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(2);

tree.right = new TreeNode(5);

const subTree = tree.left;

isSubtree(tree, subTree);
