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

  /**
   * Remove element from end of list.
   */

  pop() {
    if (!this.head || !this.tail) return null;

    let removed = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let prev = null;

      while (current.next) {
        prev = current;
        current = current.next;
      }

      this.tail = prev;

      if (this.tail) {
        this.tail.next = null;
      }
    }

    this.length--;
    return removed;
  }

  /**
   * Remove element from beginning of list.
   */

  shift() {
    if (!this.head || !this.tail) return null;

    let removed = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;

    return removed;
  }

  /**
   * Add element at beginning of list.
   * @param value
   */

  unshift(value: T) {
    const newHead = new SinglyLinkedListNode(value);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return newHead;
  }

  /**
   * Get node from giver parameter index.
   * @param index
   */
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    if (!this.head) return null;

    let tempIndex = 0;

    let current = this.head;

    while (tempIndex !== index) {
      tempIndex++;
      if (current.next) {
        current = current.next;
      }
    }

    return current;
  }

  /**
   * Set value to the node with correct index.
   * @param index
   * @param value
   */
  set(value: T, index: number) {
    const node = this.get(index);

    if (!node) return null;

    node.value = value;

    return node;
  }

  /**
   * Insert node on specific index.
   * @param value
   * @param index
   */

  insert(value: T, index: number) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new SinglyLinkedListNode(value);

    let previousItem = this.get(index - 1);

    if (!previousItem) return null;

    newNode.next = previousItem.next;
    previousItem.next = newNode;

    this.length++;

    return newNode;
  }

  /**
   * Remove node on specific index.
   * @param index
   */

  remove(index: number) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let previousNode = this.get(index - 1);
    let current = this.get(index);

    if (!previousNode || !current) return null;

    previousNode.next = current.next;
    this.length--;
    return current;
  }

  print() {
    const arr = [];

    let current = this.head;

    if (!current) return null;

    while (current) {
      arr.push(current.value);
      current = current?.next;
    }

    console.log(arr);
    console.log(this);
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}
