import { BinarySearchTree } from "./data-structures/binary-search-tree/binary-search-tree";
import { longestCommonPrefix } from "./leetcode-problems/longest-common-prefix/longest-common-prefix";

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);

console.log(bst);

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
