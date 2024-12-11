import { MaxBinaryHeap } from "./data-structures/max-binary-heap/max-binary-heap";

import "./codewars/disemvowel-trolls";

const heap = new MaxBinaryHeap();

heap.insert(55);

console.log(heap);

console.log(heap.extractMax());
