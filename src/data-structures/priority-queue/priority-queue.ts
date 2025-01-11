class PriorityQueueNode<T> {
  constructor(public value: T, public priority: number) {}
}

export class PriorityQueue<T> {
  values: PriorityQueueNode<T>[] = [];

  enqueue(val: T, priority: number) {
    const newNode = new PriorityQueueNode(val, priority);
    this.values.push(newNode);

    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];

      if (element.priority <= parent.priority) break;

      this.values[parentIndex] = element;
      this.values[idx] = parent;
      idx = parentIndex;
    }
  }

  dequeue() {
    let lastIndex = this.values.length - 1;
    const lastElement = this.values[lastIndex];
    const removed = this.values[0];

    this.values[0] = lastElement;
    this.values[lastIndex] = removed;
    this.values.pop();

    this.sinkDown();

    return removed;
  }

  sinkDown() {
    let currentIndex = 0;
    const current = this.values[currentIndex];

    while (true) {
      let rightChildIdx = currentIndex * 2 + 2;
      let leftChildIdx = currentIndex * 2 + 1;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > current) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > current) ||
          (swap !== null && leftChild && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[currentIndex] = this.values[swap];
      this.values[swap] = current;
      currentIndex = swap;
    }
  }
}
