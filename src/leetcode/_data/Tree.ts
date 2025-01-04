export type LeftRightNode = TreeNode | null;

export class TreeNode {
  public val: number;
  public left: LeftRightNode;
  public right: LeftRightNode;

  constructor(
    val?: number,
    left?: LeftRightNode,
    right?: LeftRightNode,
  ) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}
