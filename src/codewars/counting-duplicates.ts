export function duplicateCount(text: string): number {
  const duplicates: Record<string, number> = {};

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    duplicates[char] ? duplicates[char]++ : (duplicates[char] = 1);
  }

  return Object.values(duplicates).filter((duplicate) => duplicate >= 2).length;
}
