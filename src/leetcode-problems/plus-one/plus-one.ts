export function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    const lastDigit = digits[i];

    if (lastDigit + 1 < 10) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;

    if (i === 0) digits.unshift(1);
  }

  return digits;
}
