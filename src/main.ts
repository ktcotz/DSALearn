import { BinarySearchTree } from "./data-structures/binary-search-tree/binary-search-tree";
import { removeDuplicates } from "./leetcode-problems/remove-duplicates-from-sorted-array/remove-duplicates-from-sorted-array";

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);

removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
