import { TreeNode } from "./tree";

/**
 * @param {TreeNode} root
 * @return {number}
 */
const myTryMaxDepth = function(root) {
  if (!root) return 0;
  let countLeft = 0,
    countRight = 0;

  if (!root.left) {
    countLeft++;
    myTryMaxDepth(root.left);
  }
  if (!root.right) {
    countRight++;
    myTryMaxDepth(root.right);
  }

  return countLeft > countRight ? countLeft : countRight;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

const root = new TreeNode(4);

root.left = new TreeNode(9, null, null);
root.right = new TreeNode(20, 15, 7);

maxDepth(root);