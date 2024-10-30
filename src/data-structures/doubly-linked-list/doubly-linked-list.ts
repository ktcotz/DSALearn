export class DoublyLinkedListNode<T> {
  constructor(
    public value: T,
    public next: DoublyLinkedListNode<T> | null = null,
    public prev: DoublyLinkedListNode<T> | null = null
  ) {}
}

export class DoublyLinkedList<T> {
  constructor(
    public head: DoublyLinkedListNode<T> | null = null,
    public tail: DoublyLinkedListNode<T> | null = null,
    public length = 0
  ) {}

  /**
   * Add node to the end of list.
   * @param value
   * @returns list
   */

  push(value: T) {
    const node = new DoublyLinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  /**
   * Remove element from end of list.
   * @returns removed tail
   */

  pop() {
    if (!this.tail) return null;

    const poppedTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const previousElement = this.tail.prev;

      if (!previousElement) return null;

      previousElement.next = null;

      this.tail = previousElement;
    }

    this.length--;

    return poppedTail;
  }
}
