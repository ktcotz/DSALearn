import { decodeMorse } from "./codewars/decore-morse";
import { pigIt } from "./codewars/pig-it";
import { MaxBinaryHeap } from "./data-structures/max-binary-heap/max-binary-heap";

const heap = new MaxBinaryHeap();

heap.insert(55);

console.log(heap);

// pigIt("Pig latin is cool");
pigIt(
  `OKaGOSvnzgHFyv ILRMtdRksrhelM ? ! ktpBsLsUjaQ FMXXjbPUXuDBMqnygK HUDYGWayBqZzsIoCxJN  iACzUnXJOSBOH qiRbkIShUDqhMgMQW VKKmDTFWx SUkiamqUNRNK dkd wEVDUpfITsPNPT TchF CXzkrzUMWIKrngSzV KgBJnKmOvPtUgMghqW`
);

decodeMorse(".... . -.--   .--- ..- -.. .");
