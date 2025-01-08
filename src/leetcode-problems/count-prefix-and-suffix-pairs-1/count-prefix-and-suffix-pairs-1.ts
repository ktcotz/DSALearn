export function countPrefixSuffixPairs(words: string[]): number {
  let result = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const potential = words[i];
      const current = words[j];

      if (potential.length > current.length) continue;

      if (current.startsWith(potential) && current.endsWith(potential))
        result++;
    }
  }

  return result;
}
