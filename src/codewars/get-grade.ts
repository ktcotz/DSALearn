export function getGrade(a: number, b: number, c: number): string {
  const average = (a + b + c) / 3;

  if (average >= 90 && average <= 100) return "A";
  if (average >= 80 && average < 90) return "B";
  if (average >= 70 && average < 80) return "C";
  if (average >= 60 && average < 70) return "D";
  return "F";
}
