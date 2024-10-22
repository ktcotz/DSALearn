import { describe, expect, test } from "vitest";
import { SinglyLinkedList } from "./singly-linked-list";

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
});
