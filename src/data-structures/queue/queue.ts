/**
 * Queue implemented by Linked List.
 */

export class MyQueueNode<T> {
  constructor(public value: T, public next: MyQueueNode<T> | null = null) {}
}

export class MyQueue<T> {
  constructor(
    public first: MyQueueNode<T> | null = null,
    public last: MyQueueNode<T> | null = null,
    public size = 0
  ) {}

  enqueue(value: T) {
    const newNode = new MyQueueNode(value);
    if (!this.first || !this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;

    return newNode;
  }

  dequeue() {
    if (!this.first) return null;

    const current = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = current.next;
    }

    this.size--;

    return current;
  }
}
