import { BinarySearchTree } from "./data-structures/binary-search-tree/binary-search-tree";
import { removeElement } from "./leetcode-problems/remove-element/remove-element";

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);

removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
