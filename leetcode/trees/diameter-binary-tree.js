import { TreeNode } from "./tree";


/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
  let res = [0];
  
  function dfs(root) {
    if (!root) return -1;

    let left = dfs(root.left);
    let right = dfs(root.right);
    
    res[0] = Math.max(res[0], 2 + left + right);
    return 1 + Math.max(left, right);
  }

  dfs(root);
  return res;
};

const root = new TreeNode(1);

root.left = new TreeNode(2, 4, 5);
root.right = new TreeNode(3);

diameterOfBinaryTree(root);