/*
    --- BRUTE FORCE APPROACH ---
    for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [0, 0];
*/

export function twoSum(nums: number[], target: number): number[] {
  /* OPTIMAL APPROACH */

  const indexesObj: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    indexesObj[nums[i]] = i;
  }

  for (let j = 0; j < nums.length; j++) {
    let targetValue = target - nums[j];

    const index = indexesObj[targetValue];

    if (index && j !== index) {
      return [j, index];
    }
  }

  return [0, 0];
}
