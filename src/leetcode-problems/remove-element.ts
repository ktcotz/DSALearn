/*
    Założenia : 

    1. Dostajemy liczby i liczbę która określa którą mamy wykreślić z liczb.
    2. Liczby powinny zostać w tej samej kolejności.
*/

export function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
