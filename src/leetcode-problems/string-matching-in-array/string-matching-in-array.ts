export function stringMatching(words: string[]): string[] {
  const matched: string[] = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue;

      if (words[i].length < words[j].length) continue;

      if (words[i].includes(words[j])) matched.push(words[j]);
    }
  }

  return [...new Set(matched)];
}
