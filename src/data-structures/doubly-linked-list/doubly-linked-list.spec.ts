import { describe, expect, test } from "vitest";
import { DoublyLinkedList, DoublyLinkedListNode } from "./doubly-linked-list";

describe("Doubly Linked List structure method tests", () => {
  test("Should initially have head and tail setup to null, length should be 0", () => {
    const dll = new DoublyLinkedList();

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toBe(0);
  });

  test("Push method - should add head and tail when length is equal to 0", () => {
    const dll = new DoublyLinkedList();

    const CREATED_NODE_VALUE = 35;

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toBe(0);

    dll.push(CREATED_NODE_VALUE);

    expect(dll.head?.value).toBe(CREATED_NODE_VALUE);
    expect(dll.tail?.value).toBe(CREATED_NODE_VALUE);
    expect(dll.length).toBe(1);

    expect(dll.push(CREATED_NODE_VALUE)).toEqual(dll);
  });

  test("Push method - should add as tail when length is greather than 0", () => {
    const sll = new DoublyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;
    const SECOND_CREATED_NODE_VALUE = 55;

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
    expect(sll.length).toBe(0);

    sll.push(FIRST_CREATED_NODE_VALUE);

    expect(sll.head?.value).toBe(FIRST_CREATED_NODE_VALUE);
    expect(sll.tail?.value).toBe(FIRST_CREATED_NODE_VALUE);
    expect(sll.length).toBe(1);

    expect(sll.tail?.prev).toBeNull();

    sll.push(SECOND_CREATED_NODE_VALUE);

    expect(sll.head?.value).toBe(FIRST_CREATED_NODE_VALUE);
    expect(sll.tail?.value).toBe(SECOND_CREATED_NODE_VALUE);
    expect(sll.length).toBe(2);

    expect(sll.tail?.prev?.value).toBe(FIRST_CREATED_NODE_VALUE);

    expect(sll.push(FIRST_CREATED_NODE_VALUE)).toEqual(sll);
  });

  test("Pop method - should return null when head or tail is null", () => {
    const sll = new DoublyLinkedList();

    expect(sll.pop()).toBeNull();
  });

  test("Pop method - should return removed item when head or tail is a node", () => {
    const dll = new DoublyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;
    const SECOND_CREATED_NODE_VALUE = 55;

    dll.push(FIRST_CREATED_NODE_VALUE);
    dll.push(SECOND_CREATED_NODE_VALUE);

    expect(dll.pop()).toEqual(
      new DoublyLinkedListNode(
        SECOND_CREATED_NODE_VALUE,
        null,
        new DoublyLinkedListNode(FIRST_CREATED_NODE_VALUE)
      )
    );

    expect(dll.length).toBe(1);

    expect(dll.pop()).toEqual(
      new DoublyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );
  });

  test("Pop method - head and tail should be null when pop last element", () => {
    const dll = new DoublyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;

    dll.push(FIRST_CREATED_NODE_VALUE);

    expect(dll.length).toBe(1);

    expect(dll.pop()).toEqual(new DoublyLinkedListNode(35));
    dll.pop();

    expect(dll.length).toBe(0);
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
  });

  test("Shift method - should return null when head or tail is null", () => {
    const dll = new DoublyLinkedList();

    expect(dll.shift()).toBeNull();
  });

  test("Shift method - should return removed item when head or tail is a node", () => {
    const dll = new DoublyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;
    const SECOND_CREATED_NODE_VALUE = 55;

    dll.push(FIRST_CREATED_NODE_VALUE);
    dll.push(SECOND_CREATED_NODE_VALUE);

    expect(dll.shift()).toEqual(
      new DoublyLinkedListNode(
        FIRST_CREATED_NODE_VALUE,
        new DoublyLinkedListNode(SECOND_CREATED_NODE_VALUE)
      )
    );

    expect(dll.length).toBe(1);

    expect(dll.shift()).toEqual(
      new DoublyLinkedListNode(SECOND_CREATED_NODE_VALUE)
    );
  });

  test("Unshift method - should add to head and tail when no one", () => {
    const dll = new DoublyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;

    dll.unshift(FIRST_CREATED_NODE_VALUE);

    expect(dll.length).toBe(1);
    expect(dll.head).toEqual(
      new DoublyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );
    expect(dll.tail).toEqual(
      new DoublyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );
  });

  test("Unshift method - should replace head when is", () => {
    const dll = new DoublyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;

    dll.unshift(FIRST_CREATED_NODE_VALUE);

    expect(dll.length).toBe(1);
    expect(dll.head).toEqual(
      new DoublyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );
    expect(dll.tail).toEqual(
      new DoublyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );
  });

  test("Get method - should return null when index is lower than 0 or higher | average than length of list.", () => {
    const dll = new DoublyLinkedList();

    expect(dll.get(-1)).toBeNull();
    expect(dll.get(dll.length)).toBeNull();
    expect(dll.get(dll.length + 1)).toBeNull();
  });

  test("Get method - should return correctly item when index is in range", () => {
    const dll = new DoublyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;
    const SECOND_CREATED_NODE_VALUE = 55;

    dll.push(FIRST_CREATED_NODE_VALUE);

    expect(dll.get(0)).toEqual(
      new DoublyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );

    dll.push(SECOND_CREATED_NODE_VALUE);
    expect(dll.get(1)?.value).toEqual(SECOND_CREATED_NODE_VALUE);

    expect(dll.get(2)).toBeNull();
  });

  test("Set method - return null when node is not valid", () => {
    const dll = new DoublyLinkedList();

    const VALUE_TO_SET = 50;

    expect(dll.set(VALUE_TO_SET, 0)).toBeNull();
  });

  test("Set method - return changed node when all is correctly", () => {
    const dll = new DoublyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;

    dll.push(FIRST_CREATED_NODE_VALUE);

    const VALUE_TO_SET = 50;

    expect(dll.set(VALUE_TO_SET, 0)).toEqual(
      new DoublyLinkedListNode(VALUE_TO_SET)
    );
  });

  test("Insert method - return null when index is lower than 0 or higher than list", () => {
    const dll = new DoublyLinkedList();

    const NODE_VALUE_TO_INSERT = 35;

    expect(dll.insert(NODE_VALUE_TO_INSERT, -1)).toBeNull();
    expect(dll.insert(NODE_VALUE_TO_INSERT, 1)).toBeNull();
  });

  test("Insert method - add to head and tail when index is 0", () => {
    const dll = new DoublyLinkedList();

    const NODE_VALUE_TO_INSERT = 35;

    dll.insert(NODE_VALUE_TO_INSERT, 0);

    expect(dll.head?.value).toBe(NODE_VALUE_TO_INSERT);
    expect(dll.tail?.value).toBe(NODE_VALUE_TO_INSERT);
  });

  test("Insert method - add to  tail when index is equal length of list", () => {
    const dll = new DoublyLinkedList();

    const NODE_VALUE_TO_INSERT = 35;
    const LAST_NODE_VALUE_TO_INSERT = 100;

    dll.insert(NODE_VALUE_TO_INSERT, 0);

    expect(dll.head?.value).toBe(NODE_VALUE_TO_INSERT);
    expect(dll.tail?.value).toBe(NODE_VALUE_TO_INSERT);

    dll.insert(LAST_NODE_VALUE_TO_INSERT, dll.length);

    expect(dll.tail?.value).toBe(LAST_NODE_VALUE_TO_INSERT);
  });

  test("Insert method - add correctly on correct index", () => {
    const dll = new DoublyLinkedList();

    const NODE_VALUE_TO_INSERT = 35;
    const LAST_NODE_VALUE_TO_INSERT = 100;
    const MIDDLE_NODE_VALUE_TO_INSERT = 55;

    dll.insert(NODE_VALUE_TO_INSERT, 0);

    expect(dll.head?.value).toBe(NODE_VALUE_TO_INSERT);
    expect(dll.tail?.value).toBe(NODE_VALUE_TO_INSERT);

    dll.insert(LAST_NODE_VALUE_TO_INSERT, dll.length);

    expect(dll.tail?.value).toBe(LAST_NODE_VALUE_TO_INSERT);

    dll.insert(MIDDLE_NODE_VALUE_TO_INSERT, 1);

    expect(dll.get(1)?.value).toBe(MIDDLE_NODE_VALUE_TO_INSERT);
  });

  test("Remove method - return null when index is lower than 0 or higher than list", () => {
    const dll = new DoublyLinkedList();

    expect(dll.remove(-1)).toBeNull();
    expect(dll.remove(dll.length + 1)).toBeNull();
  });

  test("Remove method - remove head and tail when index is 0 and only one item.", () => {
    const dll = new DoublyLinkedList();

    const NODE_VALUE_TO_INSERT = 35;

    dll.insert(NODE_VALUE_TO_INSERT, 0);

    expect(dll.head?.value).toBe(NODE_VALUE_TO_INSERT);
    expect(dll.tail?.value).toBe(NODE_VALUE_TO_INSERT);

    dll.remove(0);

    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toBe(0);
  });

  test("Remove method - remove tail when index is equal length of list", () => {
    const dll = new DoublyLinkedList();

    const NODE_VALUE_TO_INSERT = 35;
    const LAST_NODE_VALUE_TO_INSERT = 100;

    dll.insert(NODE_VALUE_TO_INSERT, 0);

    expect(dll.head?.value).toBe(NODE_VALUE_TO_INSERT);
    expect(dll.tail?.value).toBe(NODE_VALUE_TO_INSERT);

    dll.insert(LAST_NODE_VALUE_TO_INSERT, dll.length);

    expect(dll.tail?.value).toBe(LAST_NODE_VALUE_TO_INSERT);
  });

  test("Insert method - add correctly on correct index", () => {
    const dll = new DoublyLinkedList();

    const NODE_VALUE_TO_INSERT = 35;
    const LAST_NODE_VALUE_TO_INSERT = 100;
    const MIDDLE_NODE_VALUE_TO_INSERT = 55;

    dll.insert(NODE_VALUE_TO_INSERT, 0);

    expect(dll.head?.value).toBe(NODE_VALUE_TO_INSERT);
    expect(dll.tail?.value).toBe(NODE_VALUE_TO_INSERT);

    dll.insert(LAST_NODE_VALUE_TO_INSERT, dll.length);

    expect(dll.tail?.value).toBe(LAST_NODE_VALUE_TO_INSERT);

    dll.insert(MIDDLE_NODE_VALUE_TO_INSERT, 1);

    expect(dll.get(1)?.value).toBe(MIDDLE_NODE_VALUE_TO_INSERT);
  });
});
