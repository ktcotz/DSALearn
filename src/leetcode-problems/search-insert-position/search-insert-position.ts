export function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let index = Math.floor((start + end) / 2);
    let middle = nums[index];

    if (middle === target) return index;

    if (middle > target) {
      end = index - 1;
    }

    if (middle < target) {
      start = index + 1;
    }
  }

  return start;
}
