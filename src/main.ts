import { SinglyLinkedList } from "./data-structures/singly-linked-list/singly-linked-list";
import { removeElement } from "./leetcode-problems/remove-element";

const sll = new SinglyLinkedList();

sll.push(35);
sll.push(500);

removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
