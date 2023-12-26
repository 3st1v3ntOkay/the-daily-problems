import { TreeNode } from "./tree";

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  if (!root) return null;

  let tmp = root.left;

  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

const root = new TreeNode(4);

root.left = new TreeNode(2, 1, 3);
root.right = new TreeNode(7, 6, 9);

invertTree(root);

const root2 = new TreeNode(2, 1, 3);
invertTree(root2);

// @user6845R
const invertTree2 = function(root) {
  const debugMode = true;

  if (root === null) {
    return root;
  }

  const temp = root.right;
  root.right = root.left;
  root.left = temp;

  if (root.left !== null) {
    invertTree(root.left);
  }

  if (root.right !== null) {
    invertTree(root.right);
  }

  return root;
};

// @TejveerSingh_13
const invertTree3 = function(root) {
  if (!root) return null;
  
  let swap = (node) => {
    if (!node) return;
    
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    
    swap(node.left);
    swap(node.right);
  };
  
  swap(root);
  return root;
};
