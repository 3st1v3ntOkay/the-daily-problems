import { TreeNode } from './tree';

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function(root) {
  let res = [], queue = [];
  queue.push(root);

  while (queue.length) {
    let queueLength = queue.length,
        rightSide = null;

    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();
      
      if (node) {
        rightSide = node;
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    if (rightSide) {
      res.push(rightSide.val)
    }
  }

  return res;
};

const root = new TreeNode(1);
root.left = new TreeNode(2, null, 5);
root.right = new TreeNode(3, null, 4);

rightSideView(root);

const root2 = new TreeNode(1, null, 3);
rightSideView(root2);

const root3 = new TreeNode();
rightSideView(root3);
