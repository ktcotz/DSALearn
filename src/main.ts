import { SinglyLinkedList } from "./data-structures/singly-linked-list/singly-linked-list";
import { isValid } from "./leetcode-problems/valid-parentheses";

new SinglyLinkedList();

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([])");
