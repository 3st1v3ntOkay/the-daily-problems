import { TreeNode } from './tree';

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const myIsValidBST = function(root) {
  if (!root.val) return false;

  function dfs(node) {
    if (!node) return;

    let isLeft = false,
      isRight = false;

    if (node.left < root && node.left > -Infinity) {
      isLeft = true;
    }
    if (node.right > root && node.right > Infinity) {
      isRight = true;
    }

    dfs(node.left);
    dfs(node.right);

    return (isLeft && isRight);
  }

  return dfs(root);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isValidBST = function(root) {
  function dfs(node, left, right) {
    if (!node) return true;

    if (node.val <= left || node.val >= right) {
      return false;
    }

    return (dfs(node.left, left, node.val) && dfs(node.right, node.val, right));
  }

  return dfs(root, -Infinity, Infinity);
}

const root = new TreeNode(2, 1, 3);
isValidBST(root);

const root2 = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4, 3, 6);
isValidBST(root2);
