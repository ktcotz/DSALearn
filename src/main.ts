import { SinglyLinkedList } from "./data-structures/singly-linked-list/singly-linked-list";
import { strStr } from "./leetcode-problems/find-the-index-of-the-first-occurence-in-a-string";

const sll = new SinglyLinkedList();

sll.push(35);
sll.push(500);

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("hello", "ll"));
console.log(strStr("mississippi", "issip"));
