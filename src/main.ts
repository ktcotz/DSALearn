import { BinarySearchTree } from "./data-structures/binary-search-tree/binary-search-tree";
import { mergeTwoLists } from "./leetcode-problems/merge-two-sorted-list/merge-two-sorted-list";

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);

mergeTwoLists(
  { val: 1, next: { val: 2, next: { val: 4, next: null } } },
  { val: 1, next: { val: 3, next: { val: 4, next: null } } }
);
