import { DoublyLinkedList } from "./data-structures/doubly-linked-list/doubly-linked-list";

const dll = new DoublyLinkedList();

dll.push(35);
dll.push(55);
dll.push(65);

dll.pop();

dll.unshift(10);
console.log(dll);
