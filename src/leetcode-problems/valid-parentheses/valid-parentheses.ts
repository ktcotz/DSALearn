class Stack<T extends string> {
  stackTrace: T[] = [];

  push(value: T) {
    this.stackTrace.push(value);
    return this.stackTrace.length;
  }

  pop() {
    return this.stackTrace.pop();
  }

  getLast() {
    return this.stackTrace[this.stackTrace.length - 1];
  }
}

const VALID_CLOSED_BRACKETS: Record<string, string> = {
  "{": "}",
  "(": ")",
  "[": "]",
};

export function isValid(s: string): boolean {
  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    const lastElement = stack.getLast();
    const isValidClosed = s[i] === VALID_CLOSED_BRACKETS[lastElement];

    if (isValidClosed) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.stackTrace.length === 0;
}
