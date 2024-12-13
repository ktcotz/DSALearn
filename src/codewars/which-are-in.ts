export function inArray(a1: string[], a2: string[]): string[] {
  const isInArray = a1.filter((word) =>
    a2.some((potential) => potential.includes(word))
  );

  return isInArray.sort();
}
