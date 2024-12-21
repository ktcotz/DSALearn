const MAX_INT = Math.pow(2, 31);

export function reverse(x: number): number {
  let positive = Math.abs(x);
  let reversed = 0;

  while (positive > 0) {
    reversed = reversed * 10 + (positive % 10);
    positive = Math.floor(positive / 10);
  }

  if (reversed > MAX_INT) return 0;

  return x < 0 ? -reversed : reversed;
}
