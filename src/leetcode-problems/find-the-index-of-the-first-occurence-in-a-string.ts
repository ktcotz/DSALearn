/*
    Założenia : 
    1. Dwa stringi haystack <- główny, needle <- szukany.
    2. Zwrócić index wystepowania pierwszego razu needle w haystack, jezeli nie to zwróć -1.
*/

export function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}
