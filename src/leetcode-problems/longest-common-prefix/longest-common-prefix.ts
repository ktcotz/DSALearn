export function longestCommonPrefix(strs: string[]): string {
  let result = "";

  const firstElementLength = strs[0].length;

  for (let i = 0; i < firstElementLength; i++) {
    let currentChar = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (currentChar !== strs[j][i]) {
        return result;
      }
    }
    result += currentChar;
  }

  return result;
}
