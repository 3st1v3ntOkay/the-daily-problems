import { TreeNode } from '../tree';
import { isValidBST } from "../validate-binary-search-tree";
import { expect, it, describe } from "vitest";

describe("leetcode tests", () => {
  it("expect to be truthy", () => {
    const root = new TreeNode(2, 1, 3);
    const check = isValidBST(root);

    expect(check).toBeTruthy();
  });

  it("expect to be falsy", () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(1);
    root.right = new TreeNode(4, 3, 6);
    const check = isValidBST(root);

    expect(check).toBeFalsy();
  });
});

describe("my tests", () => {
  it("none test yet", () => {});
});
