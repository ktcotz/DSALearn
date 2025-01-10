export function wordSubsets(words1: string[], words2: string[]): string[] {
  const maxFreq: Record<string, number> = {};

  for (const word of words2) {
    const freq: Record<string, number> = {};
    for (const char of word) {
      freq[char] = (freq[char] || 0) + 1;
    }
    for (const char in freq) {
      maxFreq[char] = Math.max(maxFreq[char] || 0, freq[char]);
    }
  }

  const result: string[] = [];
  for (const word of words1) {
    const freq: Record<string, number> = {};
    for (const char of word) {
      freq[char] = (freq[char] || 0) + 1;
    }

    let isValid = true;
    for (const char in maxFreq) {
      if ((freq[char] || 0) < maxFreq[char]) {
        isValid = false;
        break;
      }
    }

    if (isValid) result.push(word);
  }

  return result;
}
