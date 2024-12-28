import { TreeNode } from "./tree";

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function(root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;

  function isSameTree(s, t) {
    if (!s && !t) return true;
    if (s && t && s.val === t.val) {
      return (isSameTree(s.left, t.left) && isSameTree(s.right, t.right))
    }

    return false;
  }

  if (isSameTree(root, subRoot)) return true;

  return (isSubtree(root.left, subRoot) ||
  isSubtree(root.right, subRoot));
}

// I was so close
const myIsSubtree = function(root, subRoot) {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;

  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
  }

  // my error was here
  if (subRoot.val === root.val) {
    isSameTree(subRoot, root)
  }
  // answer: if (isSameTree(subRoot, root)) return true

  return (isSubtree(root.left, subRoot) ||
  isSubtree(root.right, subRoot))
}

const tree = new TreeNode(3);
tree.left = new TreeNode(4, 1, 2);
tree.right = new TreeNode(5);

const subTree = tree.left;

isSubtree(tree, subTree);