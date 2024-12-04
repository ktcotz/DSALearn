export function strStr(haystack: string, needle: string): number {
  let index = -1;

  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }

      if (j === needle.length - 1) {
        return i;
      }
    }
  }

  return index;
}
