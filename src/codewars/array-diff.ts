export function arrayDiff(a: number[], b: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) continue;

    result.push(a[i]);
  }

  return result;
}
