import { TreeNode } from "./tree";

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {
  let n = 0,
  stack = [],
  current = root;

  // help with conditional from @brogrammer-codes
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    n += 1;

    if (n === k) return current.val;
    current = current.right;
  }
}

const root1 = new TreeNode(3);
root1.left = new TreeNode(1, null, 2);
root1.right = new TreeNode(4);
const k1 = 1;

kthSmallest(root1, k1);
