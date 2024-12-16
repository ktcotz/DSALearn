import { gap } from "./codewars/gap";
import { humanReadable } from "./codewars/human-readable-time";
import { MaxBinaryHeap } from "./data-structures/max-binary-heap/max-binary-heap";

const heap = new MaxBinaryHeap();

heap.insert(55);

console.log(heap);

humanReadable(45296);
