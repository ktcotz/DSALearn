export function lengthOfLastWord(s: string): number {
  let result = "";
  let trimedS = s.trim();

  for (let i = trimedS.length - 1; i >= 0; i--) {
    if (trimedS[i] !== " ") {
      result += trimedS[i];
    } else {
      break;
    }
  }

  return result.length;
}
