import { TreeNode } from "../_data/";
import type { LeftRightNode } from "../_data/Tree.js";

function isSameTree(
  p: LeftRightNode,
  q: LeftRightNode,
): boolean {
  if (!p && !q) return true; // help here from @NeetCode
  if (!p || !q || p.val !== q.val) return false;

  // some help here too
  return (
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

isSameTree(tree1, tree2);
