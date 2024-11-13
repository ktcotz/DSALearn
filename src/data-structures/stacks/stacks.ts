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

export class LinkedListStack<T> {
  constructor(public stack: T[] = []) {}
}
