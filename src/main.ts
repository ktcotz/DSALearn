import { BinarySearchTree } from "./data-structures/binary-search-tree/binary-search-tree";
import { isPalindrome } from "./leetcode-problems/palindrome-number/palindrome-number";
import { romanToInt } from "./leetcode-problems/roman-to-integer/roman-to-integer";

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);

console.log(bst);
