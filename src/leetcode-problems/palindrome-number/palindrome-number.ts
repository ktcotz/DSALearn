/*
    --- STRING SOLUTION ---
    if (x < 0) return false;

  const stringX = x.toString();
  let i = 0;
  let j = stringX.length - 1;

  while (i <= j) {
    if (stringX[i] !== stringX[j]) {
      return false;
    }

    i++, j--;
  }

  return true;
*/

export function isPalindrome(x: number): boolean {
  // Optimal Approach

  if (x < 0) return false;

  let currentNumber = x;
  let tempNumber = 0;

  while (x) {
    tempNumber = tempNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return currentNumber === tempNumber;
}
