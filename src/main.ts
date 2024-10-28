import { SinglyLinkedList } from "./data-structures/singly-linked-list/singly-linked-list";
import { strStr } from "./leetcode-problems/find-the-index-of-the-first-occurence-in-a-string";
import { searchInsert } from "./leetcode-problems/search-insert-position";

const sll = new SinglyLinkedList();

sll.push(35);
sll.push(500);

searchInsert([1, 3, 5, 6], 5);
searchInsert([1, 3, 5, 6], 2);
searchInsert([1, 3, 5, 6], 7);
