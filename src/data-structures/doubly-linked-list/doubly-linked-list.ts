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

  /**
   * Remove element from start of list.
   * @returns removed head
   */

  shift() {
    if (!this.head) return null;

    const shiftedHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedHead.next;
      this.head!.prev = null;
    }

    this.length--;

    return shiftedHead;
  }

  /**
   * Add node to start of list.
   * @param value
   * @returns list
   */

  unshift(value: T) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;

      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;

    const isHigherThanHalf = index > this.length / 2;

    if (isHigherThanHalf) {
      let counter = this.length - 1;
      let currentNode = this.tail;

      while (counter !== index) {
        if (currentNode?.prev) {
          currentNode = currentNode.prev;
        }
        counter--;
      }

      return currentNode;
    } else {
      let counter = 0;
      let currentNode = this.head;

      while (counter !== index) {
        currentNode = currentNode!.next;
        counter++;
      }

      return currentNode;
    }
  }

  set(value: T, index: number) {
    const node = this.get(index);

    if (!node) return null;

    node.value = value;

    return node;
  }

  insert(value: T, index: number) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new DoublyLinkedListNode(value);

    const previousNode = this.get(index - 1);

    if (!previousNode) return null;

    const nextNode = previousNode.next;

    newNode.next = nextNode;
    newNode.prev = previousNode;

    previousNode.next = newNode;
    nextNode!.prev = newNode;

    this.length++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);

    if (!removedNode) return null;

    const previousNode = removedNode.prev;
    const nextNode = removedNode.next;

    previousNode!.next = nextNode;
    nextNode!.prev = previousNode;

    this.length--;

    return removedNode;
  }
}
