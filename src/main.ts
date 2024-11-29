import { BinarySearchTree } from "./data-structures/binary-search-tree/binary-search-tree";
import { longestCommonPrefix } from "./leetcode-problems/longest-common-prefix/longest-common-prefix";

const bst = new BinarySearchTree();

bst.insert(35);
bst.insert(11);

console.log(bst);

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
