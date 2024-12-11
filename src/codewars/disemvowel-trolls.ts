export class Kata {
  static disemvowel(str: string): string {
    const vowels = ["a", "e", "i", "o", "u"];

    const mappedWords = str.split(" ").map((word) =>
      word
        .split("")
        .map((character) => {
          if (vowels.includes(character.toLowerCase())) return null;

          return character;
        })
        .filter((character) => !!character)
        .join("")
    );

    return mappedWords.join(" ");
  }
}
