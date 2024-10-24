import { describe, expect, test } from "vitest";
import { SinglyLinkedList, SinglyLinkedListNode } from "./singly-linked-list";

describe("Singly Linked List structure method tests", () => {
  test("Should initially have head and tail setup to null, length should be 0", () => {
    const sll = new SinglyLinkedList();

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
    expect(sll.length).toBe(0);
  });

  test("Push method - should add head and tail when length is equal to 0", () => {
    const sll = new SinglyLinkedList();

    const CREATED_NODE_VALUE = 35;

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
    expect(sll.length).toBe(0);

    sll.push(CREATED_NODE_VALUE);

    expect(sll.head?.value).toBe(CREATED_NODE_VALUE);
    expect(sll.tail?.value).toBe(CREATED_NODE_VALUE);
    expect(sll.length).toBe(1);

    expect(sll.push(CREATED_NODE_VALUE)).toEqual(sll);
  });

  test("Push method - should add as tail when length is greather than 0", () => {
    const sll = new SinglyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;
    const SECOND_CREATED_NODE_VALUE = 55;

    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
    expect(sll.length).toBe(0);

    sll.push(FIRST_CREATED_NODE_VALUE);

    expect(sll.head?.value).toBe(FIRST_CREATED_NODE_VALUE);
    expect(sll.tail?.value).toBe(FIRST_CREATED_NODE_VALUE);
    expect(sll.length).toBe(1);

    sll.push(SECOND_CREATED_NODE_VALUE);

    expect(sll.head?.value).toBe(FIRST_CREATED_NODE_VALUE);
    expect(sll.tail?.value).toBe(SECOND_CREATED_NODE_VALUE);
    expect(sll.length).toBe(2);

    expect(sll.push(FIRST_CREATED_NODE_VALUE)).toEqual(sll);
  });

  test("Pop method - should return null when head or tail is null", () => {
    const sll = new SinglyLinkedList();

    expect(sll.pop()).toBeNull();
  });

  test("Pop method - should return removed item when head or tail is a node", () => {
    const sll = new SinglyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;
    const SECOND_CREATED_NODE_VALUE = 55;

    sll.push(FIRST_CREATED_NODE_VALUE);
    sll.push(SECOND_CREATED_NODE_VALUE);

    expect(sll.pop()).toEqual(
      new SinglyLinkedListNode(SECOND_CREATED_NODE_VALUE)
    );

    expect(sll.length).toBe(1);

    expect(sll.pop()).toEqual(
      new SinglyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );
  });

  test("Pop method - head and tail should be null when pop last element", () => {
    const sll = new SinglyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;

    sll.push(FIRST_CREATED_NODE_VALUE);

    expect(sll.length).toBe(1);

    expect(sll.pop()).toEqual(new SinglyLinkedListNode(35));

    sll.pop();

    expect(sll.length).toBe(0);
    expect(sll.head).toBeNull();
    expect(sll.tail).toBeNull();
  });

  test("Shift method - should return null when head or tail is null", () => {
    const sll = new SinglyLinkedList();

    expect(sll.shift()).toBeNull();
  });

  test("Shift method - should return removed item when head or tail is a node", () => {
    const sll = new SinglyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;
    const SECOND_CREATED_NODE_VALUE = 55;

    sll.push(FIRST_CREATED_NODE_VALUE);
    sll.push(SECOND_CREATED_NODE_VALUE);

    expect(sll.shift()).toEqual(
      new SinglyLinkedListNode(
        FIRST_CREATED_NODE_VALUE,
        new SinglyLinkedListNode(SECOND_CREATED_NODE_VALUE)
      )
    );

    expect(sll.length).toBe(1);

    expect(sll.shift()).toEqual(
      new SinglyLinkedListNode(SECOND_CREATED_NODE_VALUE)
    );
  });

  test("Unshift method - should add to head and tail when no one", () => {
    const sll = new SinglyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;

    sll.unshift(FIRST_CREATED_NODE_VALUE);

    expect(sll.length).toBe(1);
    expect(sll.head).toEqual(
      new SinglyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );
    expect(sll.tail).toEqual(
      new SinglyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );
  });

  test("Unshift method - should replace head when is", () => {
    const sll = new SinglyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;
    const SECOND_CREATED_NODE_VALUE = 55;

    sll.unshift(FIRST_CREATED_NODE_VALUE);

    expect(sll.length).toBe(1);
    expect(sll.head).toEqual(
      new SinglyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );
    expect(sll.tail).toEqual(
      new SinglyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );

    sll.unshift(SECOND_CREATED_NODE_VALUE);

    expect(sll.head).toEqual(
      new SinglyLinkedListNode(
        SECOND_CREATED_NODE_VALUE,
        new SinglyLinkedListNode(FIRST_CREATED_NODE_VALUE)
      )
    );
  });

  test("Get method - should return null when index is lower than 0 or higher | average than length of list.", () => {
    const sll = new SinglyLinkedList();

    expect(sll.get(-1)).toBeNull();
    expect(sll.get(sll.length)).toBeNull();
    expect(sll.get(sll.length + 1)).toBeNull();
  });

  test("Get method - should return correctly item when index is in range", () => {
    const sll = new SinglyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;
    const SECOND_CREATED_NODE_VALUE = 55;

    sll.push(FIRST_CREATED_NODE_VALUE);

    expect(sll.get(0)).toEqual(
      new SinglyLinkedListNode(FIRST_CREATED_NODE_VALUE)
    );

    sll.push(SECOND_CREATED_NODE_VALUE);

    expect(sll.get(1)).toEqual(
      new SinglyLinkedListNode(SECOND_CREATED_NODE_VALUE)
    );

    expect(sll.get(2)).toBeNull();
  });

  test("Set method - return null when node is not valid", () => {
    const sll = new SinglyLinkedList();

    const VALUE_TO_SET = 50;

    expect(sll.set(VALUE_TO_SET, 0)).toBeNull();
  });

  test("Set method - return changed node when all is correctly", () => {
    const sll = new SinglyLinkedList();

    const FIRST_CREATED_NODE_VALUE = 35;

    sll.push(FIRST_CREATED_NODE_VALUE);

    const VALUE_TO_SET = 50;

    expect(sll.set(VALUE_TO_SET, 0)).toEqual(
      new SinglyLinkedListNode(VALUE_TO_SET)
    );
  });
});
