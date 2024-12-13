export function climbStairs(n: number): number {
  if (n <= 2) return n;

  let prev = 1;
  let curr = 2;
  let end = 0;

  for (let i = 3; i <= n; i++) {
    end = prev + curr;
    prev = curr;
    curr = end;
  }

  return end;
}
