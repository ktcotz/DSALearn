export function addBinary(a: string, b: string): string {
  let maxLength = Math.max(...[a.length, b.length]);

  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  let result = "";
  let carry = 0;

  for (let i = maxLength - 1; i >= 0; i--) {
    const currA = a[i];
    const currB = b[i];

    let sum = parseInt(currA) + parseInt(currB) + carry;

    carry = sum > 1 ? 1 : 0;
    result = (sum % 2) + result;
  }

  return carry > 0 ? "1" + result : result;
}
