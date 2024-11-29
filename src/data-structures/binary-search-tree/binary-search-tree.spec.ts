import { describe, expect, test } from "vitest";
import { BinarySearchTree } from "./binary-search-tree";

describe("Binary Search Tree structure method tests", () => {
  test("Insert method, should correctly added nodes", () => {
    const bst = new BinarySearchTree();

    const FIRST_NODE_VALUE = 35;
    const SECOND_NODE_VALUE = 55;

    bst.insert(FIRST_NODE_VALUE);
    bst.insert(SECOND_NODE_VALUE);

    expect(bst.root?.value).toEqual(FIRST_NODE_VALUE);
    expect(bst.root?.right?.value).toEqual(SECOND_NODE_VALUE);
  });

  test("Get method, return null when not found", () => {
    const bst = new BinarySearchTree();

    const FIRST_NODE_VALUE = 35;
    const SECOND_NODE_VALUE = 55;

    bst.insert(FIRST_NODE_VALUE);
    bst.insert(SECOND_NODE_VALUE);

    expect(bst.get(100)).toBeNull();
  });

  test("Get method, return correct node value when found", () => {
    const bst = new BinarySearchTree();

    const FIRST_NODE_VALUE = 35;
    const SECOND_NODE_VALUE = 55;

    bst.insert(FIRST_NODE_VALUE);
    bst.insert(SECOND_NODE_VALUE);

    expect(bst.get(55)).toBe(SECOND_NODE_VALUE);
  });
});
