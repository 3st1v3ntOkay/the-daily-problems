import { TreeNode } from "./tree";

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const mylowestCommonAncestor = function(root, p, q) {
  if (!root) return -1;
  let tempParent = root.val;

  function dfs(root) {
    if (p === root.left) return;
    if (q === root.right) return;

    let tempLeft = root.parent;
    let tempRight = root.parent;

    if (root.left.val === tempLeft && root.left.left === tempRight) return;

    const n1 = 1 + dfs(root.left)
    const n2 = 1 + dfs(root.right)
    return n1, n2;
  }

  if (p !== q) {
    dfs(root)
  }

  return -1;
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  let current = root;

  while (current) {
    if (p.val > current.val && q.val > current.val) {
      current = current.right
    }
    else if (p.val < current.val && q.val < current.val) {
      current = current.left
    }
    else {
      return current
    }
  }
};

const p = 2, q = 8;
const root = new TreeNode(4);

root.left = new TreeNode(2);

root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

root.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

lowestCommonAncestor(root, p, q);

const p2 = 2, q2 = 4;
lowestCommonAncestor(root, p2, q2);

const p3 = 2, q3 = 1;
const root2 = new TreeNode(2, 1);

lowestCommonAncestor(root2, p3, q3);
