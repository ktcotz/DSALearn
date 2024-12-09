import { BinarySearchTree } from "./data-structures/binary-search-tree/binary-search-tree";
import { lengthOfLastWord } from "./leetcode-problems/length-of-last-word/length-of-last-word";

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);

lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");
