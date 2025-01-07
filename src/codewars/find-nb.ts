export function findNb(m: number): number {
  let result = 0;
  let current = 1;

  while (result <= m) {
    result += current ** 3;

    if (result === m) return current;

    current++;
  }

  return -1;
}
