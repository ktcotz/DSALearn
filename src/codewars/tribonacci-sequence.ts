export function tribonacci(
  [a, b, c]: [number, number, number],
  n: number
): number[] {
  const result = [a, b, c];

  if (n < result.length) return result.slice(0, n);

  for (let i = 3; i < n; i++) {
    const current = result[i - 1] + result[i - 2] + result[i - 3];
    result.push(current);
  }

  return result;
}
