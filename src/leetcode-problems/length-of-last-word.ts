/*
    Założenia : 

    1. Dostajemy stringa, chcemy z niego dostać długość ostatniego wyrazu.
*/

export function lengthOfLastWord(s: string): number {
  const words = s.trim().split(" ");
  const lastWord = words[words.length - 1];

  return lastWord.length;
}
