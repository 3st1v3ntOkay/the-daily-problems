import { TreeNode } from './tree';

/**
 * @param {TreeNode} root
 * @return {number}
 */
const myGoodNodes = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let times = 0;
  function dfs(root) {
    if (root.left !== null) {
      if(root.left >= root.val) {
        times++;
      }
    }
    if (root.right !== null) {
      if(root.right >= root.val) {
        times++;
      }
    }
    
    dfs(root.left);
    dfs(root.right);
  }

  dfs(root);
  return times;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const goodNodes = function(root) {
  function dfs(node, maxVal) {
    if (!node) return 0;
    let res = 0;

    if (node.val >= maxVal) {
      res = 1;
    }

    maxVal = Math.max(maxVal, node.val);
    res += dfs(node.left, maxVal)
    res += dfs(node.right, maxVal)

    return res;
  }

  return dfs(root, root.val);
}

const root = new TreeNode(3);
root.left = new TreeNode(1, 3);
root.right = new TreeNode(4, 1, 5);
goodNodes(root);

const root2 = new TreeNode(3);
root.left = new TreeNode(3, 4, 2);
goodNodes(root2);

const root3 = new TreeNode(1);
goodNodes(root3);
