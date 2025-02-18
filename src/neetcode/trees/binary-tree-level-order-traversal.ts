// import { TreeNode } from "@/neetcode/_data/Tree";

type LeftRightNode = TreeNode | null;

class TreeNode {
  public val: number;
  public left: LeftRightNode;
  public right: LeftRightNode;

  constructor(
    val?: number,
    left?: TreeNode,
    right?: TreeNode,
  ) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

// function mylevelOrder(root: TreeNode): number[][] {
//   if (!root) {
//     return [];
//   }

//   if (!root.val) {
//     return [];
//   }

//   let stack: number[][] = [];

//   stack.push([root.val]);

//   function dfs(root: TreeNode) {
//     if (root.left && root.right) {
//       stack.push([root.left, root.right]);
//     }

//     if (!root.left) {
//       stack.push([root.right]);
//     }

//     if (!root.right) {
//       stack.push([root.left]);
//     }

//     // check null error
//     dfs(root.left!);
//     dfs(root.right!);

//     return stack;
//   }

//   return dfs(root);
// }

function levelOrder(root: TreeNode): number[][] {
  // @sgallivan + @NeetCode
  let res: number[][] = [];
  let queue: TreeNode[] = [];

  queue.push(root);

  while (queue[0]) {
    let queueLength: number = queue.length;
    let level: number[] = [];

    for (let i = 0; i < queueLength; i++) {
      // check undefined error
      let node: TreeNode = queue.shift()!;
      level.push(node!.val);

      if (node!.left) {
        queue.push(node!.left);
      }

      if (node!.right) {
        queue.push(node!.right);
      }
    }

    res.push(level);
  }

  return res;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);

root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

levelOrder(root);

const root2 = new TreeNode(1);
levelOrder(root2);

const root3 = new TreeNode();
levelOrder(root3);
