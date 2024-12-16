import { MaxBinaryHeap } from "./data-structures/max-binary-heap/max-binary-heap";
import { deleteDuplicates } from "./leetcode-problems/remove-duplicates-from-sorted-list/remove-duplicates-from-sorted-list";

const heap = new MaxBinaryHeap();

heap.insert(55);

console.log(heap);

deleteDuplicates({
  val: 1,
  next: {
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 3, next: null } } },
  },
});
