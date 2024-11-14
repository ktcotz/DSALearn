/**
 * Stack implemented with array
 */

export class ArrayStack<T> {
  constructor(public stack: T[] = []) {}

  push(value: T) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

/**
 * Stack implemented with linked list
 */

class StackNode<T> {
  constructor(public value: T, public next: StackNode<T> | null = null) {}
}

export class LinkedListStack<T> {
  constructor(
    public first: StackNode<T> | null = null,
    public last: StackNode<T> | null = null,
    public size: number = 0
  ) {}

  /**
   *
   * @param value
   */
  push(value: T) {
    const newNode = new StackNode(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;

    return this.size;
  }

  /**
   * Remove the first node from the stack
   */
  pop() {
    if (!this.first) return null;

    const temp = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;

    return temp.value;
  }
}
