export function positiveSum(arr: number[]): number {
  return arr.filter((num) => num > 0).reduce((acc, next) => (acc += next), 0);
}
