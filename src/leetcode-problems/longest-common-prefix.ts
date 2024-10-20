/*
    Założenia : 

    1.Znalezienie najdłuższego prefixu który komponuje się do każdego elementu w tablicy.

*/

export function longestCommonPrefix(strs: string[]): string {
  let longestPrefix = "";
  let pointer = 0;

  for (let i = 0; i < strs[0].length; i++) {
    let isValid = true;
    const currentChar = strs[0][pointer];

    if (!currentChar) isValid = false;

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][pointer] !== currentChar) {
        isValid = false;
      }
    }
    if (isValid) {
      longestPrefix += currentChar;
      pointer++;
    }
  }

  return longestPrefix;
}
