// check: https://www.youtube.com/watch?v=vm63HuIU7kw

import { TreeNode } from "./data/tree";

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let root = new TreeNode(preorder[0]),
    mid = inorder.indexOf(preorder[0]);

  root.left = buildTree(
    preorder.slice(1, mid + 1),
    inorder.slice(0, mid),
  );
  root.right = buildTree(
    preorder.slice(mid + 1),
    inorder.slice(mid + 1),
  );

  return root;
}

const preorder1 = [3,9,20,15,7];
const inorder1 = [9,3,15,20,7];

buildTree(preorder1, inorder1);
