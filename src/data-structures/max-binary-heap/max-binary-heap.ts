export class MaxBinaryHeap {
  values: number[] = [39, 41, 18, 27, 12, 33];

  insert(value: number) {
    this.values.push(value);

    this.bubbleUp();
  }

  bubbleUp() {
    let lastIndex = this.values.length - 1;

    const element = this.values[lastIndex];

    while (lastIndex > 0) {
      let parentElementIdx = Math.floor((lastIndex - 1) / 2);
      const parentElement = this.values[parentElementIdx];

      if (parentElement < element) {
        this.values[parentElementIdx] = element;
        this.values[lastIndex] = parentElement;
      }

      lastIndex = parentElementIdx;
    }
  }

  extractMax() {
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
