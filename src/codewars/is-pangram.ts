export const isPangram = (phrase: string): boolean => {
  const FULL_ALPHABET_LETTERS = 26;

  const frequency: Record<string, number> = {};
  phrase
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        frequency[char] ? frequency[char]++ : (frequency[char] = 1);
      }
    });

  return Object.keys(frequency).length === FULL_ALPHABET_LETTERS;
};
