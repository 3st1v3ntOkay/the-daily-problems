import { TreeNode } from './tree';

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const mylevelOrder = function(root) {
  if (!root) return [];
  if (!root.val) return [];

  let stack = []; // I think this should be named queue no stack to be more specific
  stack.pop([root.val]);

  function dfs(root) {
    if (root.left && root.right) {
      stack.pop([root.left, root.right]);
    }
    if (!root.left) {
      stack.pop([root.right]);
    }
    if (!root.right) {
      stack.pop([root.left]);
    } 

    dfs(root.left);
    dfs(root.right);

    return stack;
  }

  return dfs(root);
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  // @sgallivan + @NeetCode
  let res = [], queue = [];
  queue.push(root);

  while (queue[0]) {
    let queueLength = queue.length,
        level = [];

    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(level);
  }

  return res;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, 15, 7);

levelOrder(root);

const root2 = new TreeNode(1);
levelOrder(root2);

const root3 = new TreeNode();
levelOrder(root3);
