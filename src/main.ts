import { toCamelCase } from "./codewars/convert-camel-case";
import { MaxBinaryHeap } from "./data-structures/max-binary-heap/max-binary-heap";
import { plusOne } from "./leetcode-problems/plus-one/plus-one";

toCamelCase("the_stealth_warrior");

const heap = new MaxBinaryHeap();

heap.insert(55);

console.log(heap);

console.log(heap.extractMax());
