import { BinarySearchTree } from "./data-structures/binary-search-tree/binary-search-tree";
import { twoSum } from "./leetcode-problems/two-sum/two-sum";

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);

console.log(bst);

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
