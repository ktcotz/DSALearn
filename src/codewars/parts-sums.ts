export function partsSums(ls: number[]): number[] {
  let maxReduced = ls.slice(0).reduce((acc, next) => (acc += next), 0);

  const result = [maxReduced];

  for (let i = 0; i < ls.length; i++) {
    result.push(maxReduced - ls[i]);
    maxReduced -= ls[i];
  }

  return result;
}
