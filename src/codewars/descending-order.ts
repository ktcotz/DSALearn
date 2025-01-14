export function descendingOrder(n: number): number {
  const numbers = n
    .toString()
    .split("")
    .map((n) => Number(n))
    .sort((a, b) => (b -= a));

  return Number.parseInt(numbers.join(""));
}
