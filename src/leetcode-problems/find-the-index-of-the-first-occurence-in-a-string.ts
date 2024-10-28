/*
    Założenia : 
    1. Dwa stringi haystack <- główny, needle <- szukany.
    2. Zwrócić index wystepowania pierwszego razu needle w haystack, jezeli nie to zwróć -1.
*/

export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    let isEqual = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        isEqual = false;
        break;
      }
    }

    if (isEqual) {
      return i;
    }
  }

  return -1;
}
