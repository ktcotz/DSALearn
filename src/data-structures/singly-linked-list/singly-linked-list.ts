export class SinglyLinkedListNode<T> {
  constructor(
    public value: T,
    public next: SinglyLinkedListNode<T> | null = null
  ) {}
}

export class SinglyLinkedList<T> {
  constructor(
    public head: SinglyLinkedListNode<T> | null = null,
    public tail: SinglyLinkedListNode<T> | null = null,
    public length: number = 0
  ) {}

  /**
   * Create element in list.
   * @param value
   */

  push(value: T) {
    const sllNode = new SinglyLinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = sllNode;
      this.tail = sllNode;
    } else {
      this.tail.next = sllNode;
      this.tail = sllNode;
    }

    this.length++;

    return this;
  }
}
