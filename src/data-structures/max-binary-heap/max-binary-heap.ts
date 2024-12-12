// export class MaxBinaryHeap<T extends number> {
//   values: number[] = [41, 39, 33, 18, 27, 12];

//   insert(value: T) {
//     this.values.push(value);

//     this.bubbleUp();
//   }

//   bubbleUp() {
//     let lastIndex = this.values.length - 1;
//     const element = this.values[lastIndex];

//     while (lastIndex > 0) {
//       let parentIndex = Math.floor((lastIndex - 1) / 2);

//       let parentElement = this.values[parentIndex];

//       if (element <= parentElement) break;

//       this.values[parentIndex] = element;
//       this.values[lastIndex] = parentElement;
//       lastIndex = parentIndex;
//     }
//   }

//   extractMax() {
//     const max = this.values[0];
//     const end = this.values.pop();

//     if (this.values.length > 0) {
//       if (end) {
//         this.values[0] = end;
//       }

//       this.sinkDown();
//     }

//     return max;
//   }

//   sinkDown() {
//     const length = this.values.length;
//     const element = this.values[0];
//     let idx = 0;

//     while (true) {
//       let leftChildIdx = 2 * idx + 1;
//       let rightChildIdx = 2 * idx + 2;
//       let leftChild, rightChild;
//       let swap = null;

//       if (leftChildIdx < length) {
//         leftChild = this.values[leftChildIdx];
//         if (leftChild > element) {
//           swap = leftChildIdx;
//         }
//       }

//       if (rightChildIdx < length) {
//         rightChild = this.values[rightChildIdx];
//         if (
//           (swap === null && rightChild > element) ||
//           (swap !== null && leftChild && rightChild > leftChild)
//         ) {
//           swap = rightChildIdx;
//         }
//       }

//       if (swap === null) break;

//       this.values[idx] = this.values[swap];
//       this.values[swap] = element;
//       idx = swap;
//     }

//     return element;
//   }
// }

export class MaxBinaryHeap {
  values: number[] = [39, 41, 18, 27, 12, 33];

  insert(value: number) {
    this.values.push(value);

    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      const parentElement = this.values[parentIndex];

      if (element < parentElement) break;

      this.values[index] = parentElement;
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }
}
