/*
    Założenia : 
    1. Dostajemy liczby oraz target, jeżeli znaleźliśmy target to zwróć indeks, jeżeli nie to zwróć index gdzie go dodać.
    2. Liczby są posortowane.
    3. Napisać w złożoności O(log n).
*/

export function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > target) end = mid - 1;
    if (nums[mid] < target) start = mid + 1;
  }

  return start;
}
