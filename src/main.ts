import { inArray } from "./codewars/which-are-in";
import { MaxBinaryHeap } from "./data-structures/max-binary-heap/max-binary-heap";
import { climbStairs } from "./leetcode-problems/climbing-stairs/climbing-stairs";
import { mySqrt } from "./leetcode-problems/sqrt/sqrt";

const heap = new MaxBinaryHeap();

heap.insert(55);

console.log(heap);

// climbStairs(2);
climbStairs(3);
