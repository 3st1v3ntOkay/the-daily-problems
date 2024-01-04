import { TreeNode } from "./tree";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  if (!root) return true;
  
  function dfs(root) {
    if (!root) return [true, 0];
    
    let left = dfs(root.left),
      right = dfs(root.right);
    
    // help here from @NeetCode
    let balance = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balance, 1 + Math.max(left[1], right[1])];
  }

  return dfs(root)[0];
};

const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20, 15, 7);

isBalanced(tree);
