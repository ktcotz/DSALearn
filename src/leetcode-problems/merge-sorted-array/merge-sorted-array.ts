/**
 Do not return anything, modify nums1 in-place instead.
 */
/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let k = m + n - 1;
  while (n > 0) {
    let first = nums1[m - 1];
    let second = nums2[n - 1];

    if (first > second) {
      nums1[k] = first;
      m--;
    } else {
      nums1[k] = second;
      n--;
    }

    k--;
  }
}
