import { SinglyLinkedList } from "./data-structures/singly-linked-list/singly-linked-list";
import { strStr } from "./leetcode-problems/find-the-index-of-the-first-occurence-in-a-string";
import { lengthOfLastWord } from "./leetcode-problems/length-of-last-word";
import { searchInsert } from "./leetcode-problems/search-insert-position";

const sll = new SinglyLinkedList();

sll.push(35);
sll.push(500);

lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ")
lengthOfLastWord("luffy is still joyboy")