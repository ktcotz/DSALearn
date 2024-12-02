export function removeDuplicates(nums: number[]): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i + 1] !== undefined) {
      k++;
      nums[k] = nums[i + 1];
    }
  }

  return k + 1;
}
