import { TreeNode } from "./tree";

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  if (!p && !q) return true; // help here from @NeetCode
  if (!p || !q || p.val !== q.val) return false;
  
  // some help here too
  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
};

const tree1 = new TreeNode(1, 2, 3);
const tree2 = new TreeNode(1, 2, 3);

isSameTree(tree1, tree2);